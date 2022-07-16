import Footer from './Footer'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from '../context/index'

describe('Footer', () => {
    test('Change theme', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const NightModeButton = screen.getByRole('button')
        expect(NightModeButton.textContent).toBe('Changer de mode : ☀️')
        fireEvent.click(NightModeButton)
        expect(NightModeButton.textContent).toBe('Changer de mode : 🌙')
    })
})
