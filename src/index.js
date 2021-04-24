import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { DataProvider, PlaylistProvider, LikeSaveProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <PlaylistProvider>
          <LikeSaveProvider>
            <App />
          </LikeSaveProvider>
        </PlaylistProvider>
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
