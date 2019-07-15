import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import setAuthToken from "./util/authUtil";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer />
  </Provider>,
  document.getElementById("root")
);
