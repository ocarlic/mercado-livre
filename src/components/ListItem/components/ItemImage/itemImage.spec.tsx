import { render } from '@testing-library/react'
import ItemImage from '.'

describe('Component: ItemImage', () => {
	it('Should render image', () => {
		const { getByAltText } = render(<ItemImage alt="any-alt" src="any-src" width="180px" height="180px" />)

		const itemImage = getByAltText(/any-alt/i)

		expect(itemImage).toHaveAttribute('src', 'any-src')
	})
})
