import { useContext } from 'react'
import { ThemeContext } from '../context'

function Footer() {
    const themeContext = useContext(ThemeContext)
    return (
        <footer>
            <button onClick={() => themeContext?.toggleTheme()}>
                Changer de mode :{' '}
                {themeContext?.theme === 'light' ? '☀️' : '🌙'}
            </button>
            <p>{themeContext?.theme}</p>
        </footer>
    )
}

export default Footer
