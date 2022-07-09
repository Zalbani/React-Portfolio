import { Link } from 'react-router-dom'
import '../styles/components/Header.css'

function Header() {
    return (
        <nav>
            <Link to="/"> Accueil </Link>
            <Link to="/projects/42"> Projets </Link>
        </nav>
    )
}

export default Header
