import { useLikeSave } from "../Context";
import { Link } from "react-router-dom";
import "./History.css";

export const History = () => {
  const { likeSaveState, likeSaveDispatch } = useLikeSave();

  return (
    <div>
      {likeSaveState.history.length === 0 ? (
        <div className='card empty-card'>
          <h3>No Watched Videos</h3>
          <hr className='hr' />
          <p className='mg-1'>You haven't watch any videos yet!</p>
          <Link to='/'>
            <button className='btn primary pink btn-shop'>Watch Now</button>
          </Link>
        </div>
      ) : (
        <div>
          <button
            className='btn sec-pink'
            onClick={() =>
              likeSaveDispatch({
                type: "CLEAR_HISTORY",
              })
            }
          >
            Clear All History
          </button>
          <div className='show-videos'>
            {likeSaveState.history.map((video) => {
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
                            type: "REMOVE_FROM_HISTORY",
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
        </div>
      )}
    </div>
  );
};
