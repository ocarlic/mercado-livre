import { render, fireEvent } from '@testing-library/react'
import Button from '.'

describe('Component: Button', () => {
	it('Should render button', () => {
		const handleClick = jest.fn()
		const { getByText } = render(<Button onClick={handleClick}>Clicar</Button>)

		const button = getByText(/clicar/i)

		expect(button).toBeInTheDocument()
	})

	it('Should render click in Button', () => {
		const handleClick = jest.fn()
		const { getByRole } = render(<Button onClick={handleClick}>Clicar</Button>)

		const button = getByRole('button')
		fireEvent.click(button)

		expect(button).toBeInTheDocument()
	})
})
