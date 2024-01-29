import React from "react";
import ReactDOM from "react-dom/client";
import Formulario from "./components/Formulario.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/appRouter.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
 </React.StrictMode>
);
