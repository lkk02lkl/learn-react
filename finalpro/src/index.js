import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './store';
import { StoreProvider } from "easy-peasy";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider>
  </StrictMode>,
);

