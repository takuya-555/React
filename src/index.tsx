import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OpenAITest from "./page/OpenAITest";
import reportWebVitals from "./reportWebVitals";
import App2 from './page/App2'
import App from "./page/App";
import First from "./page/First";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <First />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();