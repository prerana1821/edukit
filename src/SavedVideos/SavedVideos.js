import { useLikeSave } from "../Context";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import "./SavedVideos.css";

export const SavedVideos = () => {
  const { likeSaveState, likeSaveDispatch } = useLikeSave();

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      {likeSaveState.savedVideos.length === 0 ? (
        <div className='card empty-card'>
          <h3>No Saved Videos</h3>
          <hr className='hr' />
          <p className='mg-1'>You haven't saved any videos yet!</p>
          <Link to='/'>
            <button
              // onClick={() => changeRoute("products")}
              className='btn primary pink btn-shop'
            >
              Watch Now
            </button>
          </Link>
        </div>
      ) : (
        <div className='show-videos'>
          {likeSaveState.savedVideos.map((video) => {
            return (
              <Link to={`/video/${video.id}`}>
                <div key={video.id} className='card'>
                  <img
                    className='thumbnail'
                    src={video.thumbnail}
                    alt={video.name}
                  />
                  <h4>{video.name}</h4>
                  <div className='card-actions'>
                    <p>Category: {video.category}</p>
                    <button
                      className='btn-icon'
                      onClick={(e) => {
                        e.preventDefault();
                        likeSaveDispatch({
                          type: "UNSAVE_VIDEO",
                          payload: video,
                        });
                      }}
                    >
                      <i className='fas fa-2x fa-trash-alt'></i>
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};
