import { createContext, useContext, useReducer } from "react";
import { data } from "../database";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const dataReducer = (state, action) => {
    switch (action.type) {
      case "VIEW_BY_CATEGORY":
        return { ...state, viewByCategory: action.payload };
      case "CLEAR_CATEGORY":
        return { ...state, viewByCategory: "" };
      case "VIEW_LATEST":
        return { ...state, latestVideos: !state.latestVideos };
      case "SEARCH":
        return { ...state, searchString: action.payload };
      case "CLEAR_SEARCH":
        return { ...state, searchString: "" };
      default:
        console.log("Something went wrong");
        break;
    }
  };

  const getCategoryData = (videoList, category) => {
    if (category) {
      return videoList.filter((video) => {
        return video.category === category;
      });
    } else {
      return videoList;
    }
  };

  const getLatestData = (videoList, latest) => {
    if (latest) {
      return videoList.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
    } else {
      return videoList.sort(() => Math.random() - 0.5);
    }
  };

  const getSearchedData = (videoList, searchString) => {
    if (searchString) {
      return videoList.filter((item) => {
        return item.name.toLowerCase().includes(searchString.toLowerCase());
      });
    } else {
      return videoList;
    }
  };

  const [{ latestVideos, viewByCategory, searchString }, dispatch] = useReducer(
    dataReducer,
    {
      latestVideos: false,
      viewByCategory: "",
      searchString: "",
    }
  );

  const searchedData = getSearchedData(data, searchString);
  const latestData = getLatestData(searchedData, latestVideos);
  const categoryData = getCategoryData(latestData, viewByCategory);

  return (
    <DataContext.Provider
      value={{ data, searchString, latestVideos, categoryData, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
