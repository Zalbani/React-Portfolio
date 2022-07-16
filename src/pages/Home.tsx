import React from 'react'
import logo from '../assets/logo.svg'

import 'normalize.css'

import ProjectList from '../features/projects/components/ProjectList'

function Home() {
    return (
        <div className="App flex items-center justify-center min-h-screen dark:bg-black transition duration-500">
            <h1 className="text-blue-600 dark:text-white">Hello title</h1>
            <header className="App-header">
                <ProjectList />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React app
                </a>
            </header>
        </div>
    )
}

export default Home
