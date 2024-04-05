import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./css/globalStyles.js";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename="/pizza-shop/">
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <GlobalStyles />
        <App />
        <ToastContainer />
      </Provider>
    </PersistGate>
  </BrowserRouter>
  // </React.StrictMode>
);
