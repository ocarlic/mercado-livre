import { render } from '@testing-library/react'
import ItemDescription from '.'

describe('Component<ListItem>: ItemDescription', () => {
	it('should render description item', () => {
		const { getByTestId } = render(<ItemDescription price={4000} title="any-title" free_shipping />)

		const price = getByTestId(/data-price/i)
		const title = getByTestId(/data-title/i)
		const free_shipping = getByTestId(/data-free_shipping/)

		expect(price).toBeInTheDocument()
		expect(title).toBeInTheDocument()
		expect(free_shipping).toBeInTheDocument()
	})
})
