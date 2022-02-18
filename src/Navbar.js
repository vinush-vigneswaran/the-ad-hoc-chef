import { Link } from 'react-router-dom';


const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* <img src={require('./img/logo.png')} width="30px"/> */}
            <Link to="/"><h1>the ad hoc chef</h1></Link>
            <div className="links">
                <Link to="/browse">Browse</Link>
                {/* <Link to="/create">Search By Ingredients</Link> */}
                <Link to="/create">Create</Link>
            </div>
        </nav>
     );
}

export default Navbar;