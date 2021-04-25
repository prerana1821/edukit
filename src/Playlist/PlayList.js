import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import { usePlayList } from "../Context";
import "./PlayList.css";

export const PlayList = () => {
  const [createPlayList, setCreatePlayList] = useState("");
  const { playListState, playListDispatch } = usePlayList();
  // const [newPlayListName, setNewPlayListName] = useState("");
  // const [editPlayListName, setEditPlayListName] = useState(false);

  // console.log({ playListState });

  const playListsArray = Object.keys(playListState);

  return (
    <motion.div className='showcase-playlist' initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <div className='create-playlist'>
        <h3>Create New Playlist:</h3>
        <input
          className='input-txt-error'
          type='text'
          value={createPlayList}
          onChange={(e) => setCreatePlayList(e.target.value)}
        />

        <button
          className='btn pink'
          onClick={() => {
            setCreatePlayList("");
            return playListDispatch({
              type: "CREATE_PLAYLIST",
              payload: createPlayList,
            });
          }}
        >
          Save
        </button>
      </div>

      <div>
        {playListsArray.map((playList) => {
          return (
            <div key={playList}>
              <div className='playlist-info'>
                {/* {editPlayListName && playList ? (
                  <input
                    type='text'
                    // value={setNewPlayListName}
                    // onChange={(e) => setNewPlayListName(e.target.value)}
                  />
                ) : ( */}
                <h3>{playList}</h3>
                {/* )} */}
                {/* <button
                  className='btn-icon'
                  onClick={() => {
                    console.log(playList);
                    console.log(playListsArray.playList);
                    playList === playListsArray[playList] &&
                      setEditPlayListName(!editPlayListName);
                    // playListDispatch({
                    //   type: "EDIT_PLAYLIST_NAME",
                    //   payload: { playList, newPlayListName },
                    // });
                  }}
                >
                  <i className='fas fa-2x  fa-pen'></i>
                </button> */}
                <button
                  className='btn-icon'
                  onClick={() =>
                    playListDispatch({
                      type: "DELETE_PLAYLIST",
                      payload: playList,
                    })
                  }
                >
                  <i className='fas fa-2x fa-trash-alt'></i>
                </button>
              </div>
              <div className='playlist-details'>
                {playListState[playList].map((video) => {
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
                              playListDispatch({
                                type: "DELETE_FROM_PLAYLIST",
                                payload: {
                                  selectedPlayList: playList,
                                  video: video,
                                },
                              });
                            }}
                          >
                            <i className='fas fa-2x fa-trash-alt'></i>
                          </button>
                        </div>
                      </div>
                    </Link>
                    // <div key={video.id}>
                    //   <iframe
                    //     width='420'
                    //     height='315'
                    //     title={video.name}
                    //     src={video.url}
                    //   ></iframe>
                    //   <h4>{video.name}</h4>
                    //   <button
                    //     onClick={() =>
                    //       playListDispatch({
                    //         type: "DELETE_FROM_PLAYLIST",
                    //         payload: {
                    //           selectedPlayList: playList,
                    //           video,
                    //         },
                    //       })
                    //     }
                    //   >
                    //     Remove from Playlist
                    //   </button>
                    // </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
