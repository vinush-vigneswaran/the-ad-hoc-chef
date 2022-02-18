import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import Browse from './Browse';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/create" element={<Create/>}/>
            <Route exact path="/browse" element={<Browse/>}/>
            <Route exact path="/update/:id" element={<Update/>}/>
            <Route exact path="/blogs/:id" element={<BlogDetails/>}/>
            <Route exact path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;