import { useParams } from "react-router";
import { useLikeSave, usePlayList, useData } from "../Context";
import { useState } from "react";
import Markdown from "react-remarkable";
import "./Video.css";

export const Video = () => {
  const { playListState, playListDispatch } = usePlayList();
  const { likeSaveState, likeSaveDispatch } = useLikeSave();
  const { videoId } = useParams();
  const { data } = useData();

  const video = data.find((video) => video.id === videoId);
  const playListsArray = Object.keys(playListState);
  const [selectedPlaylist, setSelectedPlaylist] = useState(playListsArray[0]);

  const [editNote, setEditNote] = useState(true);
  const [showNote, setShowNote] = useState(false);
  const [inputText, setInputText] = useState("");

  const likeUnLike = (item) => {
    return likeSaveState.likedVideos.reduce((acc, value) => {
      return value.id === item.id ? "fas fa-lg fa-thumbs-up" : acc;
    }, "far fa-lg fa-thumbs-up");
  };

  const saveUnSave = (item) => {
    return likeSaveState.savedVideos.reduce((acc, value) => {
      return value.id === item.id ? "fas fa-lg fa-clock" : acc;
    }, "far fa-lg fa-clock");
  };

  return (
    <div>
      <div className='video-notes'>
        <div className='video'>
          <iframe
            width='100%'
            height='500px'
            style={{ borderRadius: "0.5rem" }}
            title={video.name}
            src={video.url}
          ></iframe>
        </div>
        {showNote && (
          <div className='notes'>
            {editNote ? (
              <textarea
                className='input-notes'
                placeholder='Add Notes...also supports markdown!'
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              ></textarea>
            ) : (
              <div className='display-notes'>
                <Markdown source={inputText}></Markdown>
              </div>
            )}
            <div className='video-note-actions'>
              <button
                className='btn pink'
                onClick={() => {
                  setEditNote(!editNote);
                  // console.log(likeSaveState.notes);
                  console.log(likeSaveState.notes.length === 0 ? "0" : "1");
                  return likeSaveState.notes.length === 0
                    ? likeSaveDispatch({
                        type: "ADD_NOTE",
                        payload: { videoId: videoId, note: inputText },
                      })
                    : likeSaveState.notes.reduce(
                        (acc, value) => {
                          return value.videoId === video.videoId
                            ? likeSaveDispatch({
                                type: "SAVE_NOTE",
                                payload: {
                                  videoId: video.videoId,
                                  note: inputText,
                                },
                              })
                            : acc;
                        },
                        likeSaveDispatch({
                          type: "ADD_NOTE",
                          payload: { videoId: videoId, note: inputText },
                        })
                      );
                  // : likeSaveState.notes.find((item) => {
                  //     console.log(item);
                  //     return item.videoId === videoId
                  //       ? likeSaveDispatch({
                  //           type: "SAVE_NOTE",
                  //           payload: { videoId: videoId, note: inputText },
                  //         })
                  //       : likeSaveDispatch({
                  //           type: "ADD_NOTE",
                  //           payload: { videoId: videoId, note: inputText },
                  //         });
                  //   });
                }}
              >
                {editNote ? "Save Note" : "Edit Note"}
              </button>
              {editNote && (
                <button
                  className='btn pink'
                  onClick={() => setEditNote(!editNote)}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={showNote ? "video-description" : "video-desc-center"}>
        <h3>{video.name}</h3>
        <div className='video-desc-details'>
          <p>Category: {video.category}</p>
          <p>Published Date: {video.date}</p>
        </div>
        <div className='video-desc-actions'>
          <label className='choose-playlist'>
            Save to Play List:
            <select
              onChange={(e) => {
                setSelectedPlaylist(e.target.value);
                return playListDispatch({
                  type: "SAVE_TO_PLAYLIST",
                  payload: {
                    selectedPlayList: e.target.value,
                    selectedVideo: video,
                  },
                });
              }}
              value={selectedPlaylist}
            >
              {playListsArray.map((playList) => {
                return (
                  <option value={playList} key={playList}>
                    {playList}
                  </option>
                );
              })}
            </select>
          </label>
          <button
            className='btn-card-actions'
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              likeSaveState.savedVideos.reduce((acc, value) => {
                return value.id === video.id
                  ? likeSaveDispatch({
                      type: "UNSAVE_VIDEO",
                      payload: video,
                    })
                  : acc;
              }, likeSaveDispatch({ type: "SAVE_VIDEO", payload: video }));
            }}
          >
            <div className='avatar av-sm av-pink'>
              <i className={saveUnSave(video)}></i>
            </div>
          </button>
          <button
            className='btn-card-actions'
            onClick={() => {
              likeSaveState.likedVideos.reduce((acc, value) => {
                return value.id === video.id
                  ? likeSaveDispatch({
                      type: "UNLIKE_VIDEO",
                      payload: video,
                    })
                  : acc;
              }, likeSaveDispatch({ type: "LIKE_VIDEO", payload: video }));
            }}
          >
            <div className='avatar av-sm av-pink'>
              <i className={likeUnLike(video)}></i>
            </div>
          </button>
          <button
            className='avatar av-sm av-pink btn'
            onClick={() => {
              setShowNote(!showNote);
            }}
          >
            {showNote ? (
              <i className='far fa-lg fa-sticky-note'></i>
            ) : (
              <i className='fas fa-lg fa-sticky-note'></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// console.log("Hello");
// return likeSaveState.notes.map((item) => {
//   console.log("Hellllowww");
//   return item.videoId === videoId
//     ? likeSaveDispatch({
//         type: "SAVE_NOTE",
//         payload: { videoId: videoId, note: inputText },
//       })
//     : likeSaveDispatch({
//         type: "ADD_NOTE",
//         payload: { videoId: videoId, note: inputText },
//       });
// });
// return likeSaveState.notes.reduce(
//   (acc, value) => {
//     return value.videoId === video.videoId
//       ? likeSaveDispatch({
//           type: "SAVE_NOTE",
//           payload: {
//             videoId: video.videoId,
//             note: inputText,
//           },
//         })
//       : acc;
//   },
//   likeSaveDispatch({
//     type: "ADD_NOTE",
//     payload: { videoId: videoId, note: inputText },
//   })
// );
