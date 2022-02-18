import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('Cocktail');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { name, type, body };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            history('/');
        })
    }

    return ( 
        <div className="create">
            <div className="page-title">
                <h2>Add a New Recipe</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Recipe Title</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Recipe Type:</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="Cocktails">Cocktail</option>
                    <option value="Milkshakes">Smoothies</option>
                    <option value="Soup">Soup</option>
                    <option value="Other">Other</option>
                </select>


                <label>Recipe Steps:</label>
                <textarea
                    type="text"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                {!isPending && <button>Add Recipe</button>}
                {isPending && <button disabled>Please wait...</button>}
            </form>
        </div>
     );
}

export default Create;