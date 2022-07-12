import { useContext } from 'react'
import { ThemeContext } from '../context'

import styled from 'styled-components'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: red;
`

function Footer() {
    const themeContext = useContext(ThemeContext)
    return (
        <FooterContainer>
            <NightModeButton onClick={() => themeContext?.toggleTheme()}>
                Changer de mode :{' '}
                {themeContext?.theme === 'light' ? '☀️' : '🌙'}
            </NightModeButton>
            <p>{themeContext?.theme}</p>
        </FooterContainer>
    )
}

export default Footer
