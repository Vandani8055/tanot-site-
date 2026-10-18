import React from "react";
import ReactDOM from "react-dom/client";
import { LazyMotion, MotionConfig } from "framer-motion";
// Self-hosted fonts: no Google Fonts request, no render blocking
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/dm-sans";
import App from "./App.jsx";
import "./index.css";

const loadFeatures = () => import("./features.js").then((res) => res.default);

// reducedMotion="user" => animations switch off for people who set "reduce motion" in their OS
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures}>
        <App />
      </LazyMotion>
    </MotionConfig>
  </React.StrictMode>
);
