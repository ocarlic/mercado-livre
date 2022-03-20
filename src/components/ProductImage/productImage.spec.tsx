import { render } from '@testing-library/react'
import ProducImage from '.'

describe('Component: ProducImage', () => {
	it('Should render product image', () => {
		const { getByAltText } = render(<ProducImage alt="any-alt" picture="any-picture" />)

		const productImage = getByAltText(/any-alt/i)

		expect(productImage).toHaveAttribute('src', 'any-picture')
	})
})
