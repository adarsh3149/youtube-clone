import {  Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './page/Home';
import VideoDetails from './VideoDetails';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import SinglePage from './page/SinglePage'
function App() {
  return (
    <div className="app">
      <>
        <Header />
        {/* <div className="app__page"> */}
          <Sidebar />
          <Routes>
          <Route path="/" exact element={<Home/>} />
        <Route path="/watch/:videoId" element={<SinglePage/>} />
          </Routes>
        {/* </div> */}
      </>
    </div>
  );
}

export default App;
