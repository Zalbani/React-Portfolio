import React from 'react'
import logo from '../../assets/logo.svg'
import '../../styles/App.css'

import Header from '../../components/Header'
import ProjectList from '../../components/ProjectList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
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

export default App
