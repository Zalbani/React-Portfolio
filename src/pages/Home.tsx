import React from 'react'
import logo from '../assets/logo.svg'
import '../styles/App.css'

import ProjectList from '../components/ProjectList'

function Home() {
    return (
        <div className="App">
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
            <h2>test</h2>
        </div>
    )
}

export default Home
