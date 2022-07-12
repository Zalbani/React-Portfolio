import React, { useState, createContext } from 'react'

interface ThemeContextInterface {
    theme: string
    toggleTheme: Function
}

export const ThemeContext = createContext<ThemeContextInterface | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
