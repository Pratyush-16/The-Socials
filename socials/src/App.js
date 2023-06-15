import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './frontend/Pages/Home/Home'
import Bookmarks from './frontend/Pages/Bookmark/Bookmarks';
import Login from './frontend/Pages/Auth/Login/Login';
import Nav from './frontend/Components/Navbar/Nav';
import Explore from './frontend/Pages/Explore/Explore';
import Profile from './frontend/Pages/Profile/Profile';
import LandingPage from './frontend/Pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">

      <Nav/>

      <Routes>
            <Route index='/landing' element={<LandingPage/>} />
            <Route path='/bookmarks' element={<Bookmarks/>} />
            <Route path='/explore' element={<Explore/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/login' element={<Login/>} />
      </Routes>
      
    </div>
  );
}

export default App;
