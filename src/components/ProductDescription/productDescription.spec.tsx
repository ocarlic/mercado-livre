import { render } from '@testing-library/react'
import ProductDescription from '.'

describe('Component: ProductDescription', () => {
	it('should render description', () => {
		const { getByText } = render(<ProductDescription description="any-description" />)

		const description = getByText('any-description')

		expect(description).toBeInTheDocument()
	})
})
