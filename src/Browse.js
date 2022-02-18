import BlogList from './BlogList';
import useFetch from './useFetch';

//const weblink = 'http://localhost:8080/cocktail/allCocktail';
const weblink = 'http://localhost:8000/blogs';

const Browse = () => {
    const {data: blogs, isPending, error} = useFetch(weblink);

    return ( 
        <div className="home">
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title="Browse Recipes"/>
        </div>
     );
}

export default Browse;