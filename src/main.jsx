import ReactDOM from "react-dom/client";
// Import css

// Import Components
import App from "./components/App";
import "./styles/style.module.scss";

// import react router deps
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
root.render(router);
