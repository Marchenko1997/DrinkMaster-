import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/drink-code-frontend">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
