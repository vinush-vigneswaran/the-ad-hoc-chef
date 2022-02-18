import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import useFetch from './useFetch';

const Update = () => {

    // Load previous items
    const { id } = useParams();
    const { data: oldBlog, error, isPending } =  useFetch('http://localhost:8000/blogs/' + id);
    const history = useNavigate();

    // New submission variables
    const [name, setName] = useState('');
    const [type, setType] = useState('Cocktail');
    const [body, setBody] = useState('');
    const [newIsPending, setIsPending] = useState(false);

    // Handle PUT request
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { name, type, body };

        setIsPending(true);

        fetch('http://localhost:8000/blogs/' + id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history('/');
        })
    }

    return ( 
        <div>
        <BlogDetails />
        <div className="update">
            <div className="page-title">
                <h2>Update: {oldBlog.name} (#{oldBlog.id})</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Change Name:</label>
                <input 
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder = {oldBlog.name}
                />
                <label>Change Type:</label>
                <select
                    required
                    type="text"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="Cocktail">Cocktail</option>
                    <option value="Milkshakes">Smoothies</option>
                    <option value="Soup">Soup</option>
                    <option value="Other">Other</option>
                </select>


                <label>Change Recipe:</label>
                <textarea
                    required
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder = {oldBlog.body}
                />
                {!newIsPending && <button>Modify Recipe</button>}
                {newIsPending && <button disabled>Please wait...</button>}
            </form>
        </div>
        </div>
     );
}

export default Update;