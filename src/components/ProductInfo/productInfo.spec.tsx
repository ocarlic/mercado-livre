import { fireEvent, render } from '@testing-library/react'
import ProductInfo from '.'

describe('Component: ProductInfo', () => {
	it('Should render product info', () => {
		const { getByText, getByTestId } = render(<ProductInfo price={3000} title="any-title" sold_quantity={300} />)

		const price = getByTestId('data-price')
		const title = getByText(/any-title/i)
		const sold_quantity = getByText('300 vendidos')

		expect(price).toBeInTheDocument()
		expect(title).toBeInTheDocument()
		expect(sold_quantity).toBeInTheDocument()
	})

	it('Should render click button for buy', () => {
		const { getByText } = render(<ProductInfo price={3000} title="any-title" sold_quantity={300} />)

		const button = getByText(/comprar/i)

		fireEvent.click(button)
	})
})
