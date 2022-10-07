import "/src/styles/ThemeToggler.css";
import night from "/src/assets/night.png";
import sunny from "/src/assets/sunny.png";
import { useEffect, useState } from "react";

export const THEME_KEY = "theme";

export default function ThemeToggler() {
    const persistedTheme = localStorage.getItem(THEME_KEY);
    const [theme, setTheme] = useState(persistedTheme ?? "light");

    useEffect(() => {
        document.body.className = theme === "light" ? "light" : "dark";
        localStorage.setItem(THEME_KEY, theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <div className={"toggler"} onClick={toggleTheme}>
            <img id="toggler-image" src={theme === "light" ? sunny : night} />
        </div>
    );
}
