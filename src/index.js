import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import Routes from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/index";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={Routes} />
    </Provider>
  </React.StrictMode>
);
