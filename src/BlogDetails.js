import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Update from './Update';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } =  useFetch('http://localhost:8000/blogs/' + id);
    const history = useNavigate();

    const handleDelete = () => {
        if (window.confirm(("This item will be permanently deleted."))) {
            fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            history('/');
        })
        }       
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.name} </h2> 
                <h5>{blog.type} | #{blog.id}</h5>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>

                <Link to={`/update/${blog.id}`}>
                    <button>Update</button>
                </Link>
            </article>
        </div>
     );
}

export default BlogDetails;