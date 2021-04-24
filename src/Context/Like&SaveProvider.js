import { createContext, useContext, useReducer } from "react";
import { v4 } from "uuid";

export const LikeSaveContext = createContext();

export const LikeSaveProvider = ({ children }) => {
  const likeSaveReducer = (state, action) => {
    switch (action.type) {
      case "LIKE_VIDEO":
        return {
          ...state,
          likedVideos: state.likedVideos.concat(action.payload),
        };
      case "UNLIKE_VIDEO":
        return {
          ...state,
          likedVideos: state.likedVideos.filter((item) => {
            return item.id !== action.payload.id;
          }),
        };
      case "SAVE_VIDEO":
        return {
          ...state,
          savedVideos: state.savedVideos.concat(action.payload),
        };
      case "UNSAVE_VIDEO":
        return {
          ...state,
          savedVideos: state.savedVideos.filter((item) => {
            return item.id !== action.payload.id;
          }),
        };
      case "ADD_NOTE":
        console.log("Hello");
        return {
          ...state,
          notes:
            //  state.notes.some((ele) => ele.id === action.payload.videoId)
            //   ? state.notes
            //   : state.notes.concat({
            //       id: v4(),
            //       videoId: action.payload.videoId,
            //       note: action.payload.note,
            //     }),
            // notes: state.notes.map((item) => {
            //   return item.id === action.payload.id
            //     ? item
            //     : {
            //         id: v4(),
            //         videoId: action.payload.videoId,
            //         note: action.payload.note,
            //       };
            // }),
            state.notes.concat({
              id: v4(),
              videoId: action.payload.videoId,
              note: action.payload.note,
            }),
        };
      case "SAVE_NOTE":
        // console.log("Hii");
        // return {
        //   ...state,
        //   notes: state.notes.reduce((acc, item) => {
        //     return item.videoId === action.payload.videoId
        //       ? { ...item, note: action.payload.note }
        //       : acc;
        //   }, {}),
        // };
        return {
          ...state,
          notes: state.notes.map((item) => {
            return item.videoId === action.payload.videoId
              ? { ...item, note: action.payload.note }
              : item;
          }),
        };
      case "ADD_TO_HISTORY":
        return {
          ...state,
          history: state.history.some((ele) => ele.id === action.payload.id)
            ? state.history
            : state.history.concat(action.payload),
        };
      case "REMOVE_FROM_HISTORY":
        return {
          ...state,
          history: state.history.filter((item) => {
            return item.id !== action.payload.id;
          }),
        };
      case "CLEAR_HISTORY":
        return {
          ...state,
          history: state.history.splice(0, state.history.length),
        };
      default:
        console.log("Something went wrong");
        break;
    }
  };

  const [likeSaveState, likeSaveDispatch] = useReducer(likeSaveReducer, {
    likedVideos: [],
    savedVideos: [],
    history: [],
    notes: [],
  });

  console.log(likeSaveState);

  return (
    <LikeSaveContext.Provider value={{ likeSaveState, likeSaveDispatch }}>
      {children}
    </LikeSaveContext.Provider>
  );
};

export const useLikeSave = () => {
  return useContext(LikeSaveContext);
};
