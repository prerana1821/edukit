import { createContext, useContext, useReducer } from "react";

export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const playListReducer = (state, action) => {
    switch (action.type) {
      case "SAVE_TO_PLAYLIST":
        return {
          ...state,
          [action.payload.selectedPlayList]: [
            ...state[action.payload.selectedPlayList],
            action.payload.selectedVideo,
          ],
        };
      case "CREATE_PLAYLIST":
        return {
          ...state,
          [action.payload]: [],
        };
      case "DELETE_PLAYLIST":
        return Object.keys(state).reduce((object, key) => {
          if (key !== action.payload) {
            object[key] = state[key];
          }
          return object;
        }, {});
      case "DELETE_FROM_PLAYLIST":
        // console.log("11", action.payload);
        // console.log("22", action.payload.selectedPlayList);
        // console.log("33", state.selectedPlayList);
        // break;
        return {
          ...state,
          // [action.payload
          //   .selectedPlayList]: action.payload.selectedPlayList.filter(
          //   (item) => {
          //     return item.id !== action.payload.video.id;
          //   }
          // ),
        };
      default:
        console.log("Something went wrong");
        break;
    }
  };

  const [playListState, playListDispatch] = useReducer(playListReducer, {
    "My PlayList": [],
    "My Learnings": [],
  });

  // console.log(playListState);

  return (
    <PlaylistContext.Provider value={{ playListState, playListDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlayList = () => {
  return useContext(PlaylistContext);
};
