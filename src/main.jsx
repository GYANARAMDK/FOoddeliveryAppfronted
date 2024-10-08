import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import reportWebVitals from './reportWebVitals';
import App from "./App.jsx";

import "./index.css";

import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./components/CartContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);

// reportWebVitals();
