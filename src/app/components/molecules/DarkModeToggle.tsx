"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        const shouldUseDark =
            storedTheme === "dark" || (!storedTheme && systemPrefersDark);

        setIsDarkMode(shouldUseDark);
        document.documentElement.classList.toggle("dark", shouldUseDark);
    }, []);

    const toggleDarkMode = () => {
        const newValue = !isDarkMode;
        setIsDarkMode(newValue);
        document.documentElement.classList.toggle("dark", newValue);
        localStorage.setItem("theme", newValue ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 dark:bg-white/10 dark:hover:bg-white/20 transition"
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-white" />
            ) : (
                <Moon className="h-6 w-6 text-white" />
            )}
        </button>
    );
}
