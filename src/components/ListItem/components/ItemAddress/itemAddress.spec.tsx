import { render } from '@testing-library/react'
import ItemAddress from '.'

describe('Component: ItemAddress', () => {
	it('should render address', () => {
		const { getByText } = render(<ItemAddress state_name="any-address" />)

		const address = getByText(/any-address/i)

		expect(address).toBeInTheDocument()
	})
})
