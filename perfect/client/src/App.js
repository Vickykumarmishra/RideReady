import logo from './logo.svg';
import './App.css';
import BookRide from './components/BookRide';
import LandingPage from './components/LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import NavRide from './components/NavRide';
import ProvideService from './components/ProvideService';
import Showimage from './components/Showimage';
import Photos from './components/Photos';
import Feedback from './components/Feedback';
function App() {
  return (
    <div className='App'>
    <BrowserRouter>

    {/*The useNavigate hook is intended to be used within a component that is a child of a BrowserRouter component.
Here's how you can fix it:
Wrap your entire application or at least the part where you want to use routing with a BrowserRouter in your main App.js or the root component: */}

      {/* <Navbar/> */}
      <NavRide/>
     {/*since we are using useNavigate() inside navbar so we need to make it child of browserRouter */}

      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/ProvideService" element={<ProvideService/>}></Route>
        <Route path='/BookRide' element={<BookRide/>}></Route>
        <Route path='/Feedback' element={<Feedback/>}></Route>
       
        <Route path="/Photos" element={<Photos/>}></Route>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
      
      </div>
  );
}

export default App;
