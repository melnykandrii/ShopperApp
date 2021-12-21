import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/infrastructure/theme";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
