import { render } from '@testing-library/react'
import ListItem from '.'

const MOCK_LIST = [
	{
		address: { state_name: 'any-address' },
		id: 'MLB2100247650',
		price: 1400,
		shipping: { free_shipping: true },
		thumbnail: 'any-thumbnail',
		title: 'any-title'
	},
	{
		address: { state_name: 'any-address' },
		id: 'MLB757208971',
		price: 1400,
		shipping: { free_shipping: true },
		thumbnail: 'any-thumbnail',
		title: 'any-title'
	}
]

describe('Component: ListItem', () => {
	it('Should render listItem', () => {
		render(<ListItem item={MOCK_LIST} />)
	})

	it('Should render empty if not found item', () => {
		const { getByText } = render(<ListItem item={[]} query="ABCDEF" />)

		const empty = getByText(/Não encontramos o produto "ABCDEF" na busca/i)

		expect(empty).toBeInTheDocument()
	})
})
