import React from "react";
import ReactDOM from "react-dom/client";
import MainCardForm from "./MainCardForm.jsx";
import { store } from "../src/redux/store/store.js";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainCardForm />
    </Provider>
  </React.StrictMode>
);
