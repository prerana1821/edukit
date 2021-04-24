import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const [img, setImg] = useState("img1");
  return (
    <div className='home'>
      <div className='banner'>
        {img === "img1" && (
          <div className='sliding-img img1'>
            <h2 className='slogan'>
            Exciting courses are waiting for you!!<br/>
            What are you waiting for?
            </h2>
            <Link to='/courses'>
              <button className='btn-main btn'>Enroll Now</button>
            </Link>
          </div>
        )}
        {img === "img2" && ( 
        <div className='sliding-img img2'>
           <h2 className='slogan'>
            Get the modern tech across your brain,<br/>
            Explore series of blogs and articles here!
            </h2>
            <Link to='/products'>
              <button className='btn-main btn'>Read Now</button>
            </Link>
          </div>
        )}
        <button
          style={
            img === "img1"
              ? { backgroundColor: "#f50057" }
              : { backgroundColor: "#fbcfe8" }
          }
          className='btn-img'
          onClick={() => setImg("img1")}
        ></button>
        <button
          style={
            img === "img2"
              ? { backgroundColor: "#f50057" }
              : { backgroundColor: "#fbcfe8" }
          }
          className='btn-img'
          onClick={() => setImg("img2")}
        ></button>
      </div>

      <h2 className='center-txt'>Explore More!!</h2>
      <div className='categories-home'>
        <Link to='/'>
          <div className='card-category cat-img1'>
            <h3>View Latest Articles & Blogs</h3>
          </div>
        </Link>
        <Link to='/courses'>
          <div className='card-category cat-img2'>
            <h3>View Courses</h3>
          </div>
        </Link>
      </div>

      <footer className='main-footer'>
        <p>
          © | 2021 | <span className='pink-txt'>eduKit</span>
        </p>
        <p className='pink-txt'>eduKit by Dark Coders</p>

        <ul className='footer-list'>
          <li>
            <a className='links' href='mailto: prerananw1@gmail.com'>
              <i className='far fa-2x fa-envelope'></i>
            </a>
          </li>

          <li>
            <a className='links' href='https://github.com/prerana1821'>
              <i className='fab fa-2x fa-github'></i>
            </a>
          </li>

          <li>
            <a className='links' href='https://twitter.com/precodes18'>
              <i className='fab fa-2x fa-twitter'></i>
            </a>
          </li>
          <li>
            <a
              className='links'
              href='https://www.linkedin.com/in/prerana-nawar/'
            >
              <i className='fab fa-2x fa-linkedin-in'></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
