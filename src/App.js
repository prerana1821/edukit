import { Routes, Route } from "react-router-dom";
import { VideoListing } from "./VideoListing";
import { Header } from "./Header";
import { LikedVideos } from "./LikedVideos";
import { SavedVideos } from "./SavedVideos";
import { PlayList } from "./Playlist";
import { Video } from "./Videos";
import { History } from "./History";
// import { SideBar } from "./Sidebar";
import "./App.css";
import { Quiz } from "./Quizs/Quiz";
import { Home } from "./Home/Home";
import FlutterQuiz from "./Quizs/flutterQuiz";
import AngularQuiz from "./Quizs/angularQuiz";
import ReactQuiz from "./Quizs/reactQuiz";
import LaravelQuiz from "./Quizs/laravelQuiz";
import VueQuiz from "./Quizs/vueQuiz";
import {Link} from "react-scroll";
function App() {
  return (
    <div className='App' id='top'>
      <Header />
      <div className='main'>
        {/* <SideBar /> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/courses' element={<VideoListing />}></Route>
          <Route path='courses/video/:videoId' element={<Video />}></Route>
          <Route path='/playlist' element={<PlayList />}></Route>
          <Route path='/quizes' element={<Quiz />}></Route>
          <Route path='/history' element={<History />}></Route>
          <Route path='/liked-videos' element={<LikedVideos />}></Route>
          <Route path='/saved-videos' element={<SavedVideos />}></Route>
          <Route path='quizes/Flutter' element={<FlutterQuiz />}></Route>
          <Route path='quizes/AngularJS' element={<AngularQuiz />}></Route>
          <Route path='quizes/React' element={<ReactQuiz />}></Route>
          <Route path='quizes/Laravel-6' element={<LaravelQuiz />}></Route>
          <Route path='quizes/VueJS' element={<VueQuiz />}></Route>
        </Routes>
        <Link to='top' smooth={true} duration={500}>
          <div className='btn-top badge-av'>
            <div className='avatar avatar-top av-pink'>
              <i className='fas fa-lg  fa-arrow-up'></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
