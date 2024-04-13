
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {Routes,Route} from "react-router-dom"
import Body from './components/Body'
import Discover from './components/Discover';
import Cover from './components/Cover';
import Profile from './components/Profile';

function App() {
  return (
 
  
    <div className="App">
        <Routes>
          <Route path="/" element={<Cover/>}/>
          <Route path="/cover" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/discover" element={<Discover/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
