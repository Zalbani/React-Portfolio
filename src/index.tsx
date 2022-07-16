import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/tailwind.css'

import { ThemeProvider } from './context'

import Home from './pages/Home'
import Project from './pages/Project'
import Error from './pages/Error'

import Header from './layouts/Header'
import Footer from './layouts/Footer'
import DarkModeButton from './features/projects/darkMode/hook/components/darkModeButton'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <Router>
            <DarkModeButton />
            <ThemeProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/:projectId" element={<Project />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </ThemeProvider>
        </Router>
    </React.StrictMode>
)
