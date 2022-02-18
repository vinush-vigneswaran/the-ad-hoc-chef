import BlogList from './BlogList';
import useFetch from './useFetch';
import Slideshow from './Slideshow';


//const weblink = 'http://localhost:8080/cocktail/allCocktail';
const weblink = 'http://localhost:8000/blogs';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch(weblink);

    return ( 
        <div className="home">
            <Slideshow/>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BlogList blogs={blogs} title=""/>
        </div>
     );
}

export default Home;