import { Link } from 'react-router-dom';
import Search from './Search';
import { useState } from 'react';


const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};


const BlogList = ({blogs, title}) => {

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(blogs, searchQuery);

    return ( 
        <div className="blog-list">
            <div className="page-title">
                <h2>{title}</h2>
            </div>

            <div className="search-container">
                <Search 
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
            </div>

            {filteredPosts.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.name}</h2>
                        <p>#{blog.id} | {blog.type}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}

export default BlogList;