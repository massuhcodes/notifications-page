import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/components/App";
import ThemeToggler from "/src/components/ThemeToggler";
import "/src/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <ThemeToggler />
    </React.StrictMode>
);
