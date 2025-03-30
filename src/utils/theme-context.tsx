import React, { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {

        const isDark = localStorage.getItem('theme') === 'dark';
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        setIsDarkMode(isDark);
        setIsHydrated(true);
      }, []);
    
      const toggleDarkMode = () => {

        const newTheme = !isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
      };

    if(!isHydrated)
        return null;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            { children }
        </ThemeContext.Provider>
    );
};

const useTheme = () => {

    const context = useContext(ThemeContext);

    if(!context)
        throw new Error('useTheme must be used within ThemeProvider');

    return context;
}

export { ThemeProvider, useTheme };