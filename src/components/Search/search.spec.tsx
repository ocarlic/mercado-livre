import { render, fireEvent } from '@testing-library/react'
import Search from './'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Component: Search', () => {
	it('Should render search with placeholder', () => {
		const { getByPlaceholderText } = render(<Search placeholder="any-placeholder" />)

		const placeholder = getByPlaceholderText(/any-placeholder/i)

		expect(placeholder).toBeInTheDocument()
	})

	it('Should render change input', () => {
		const { getByTestId } = render(<Search placeholder="any-placeholder" />)

		const input = getByTestId('input-search') as HTMLInputElement

		expect(input.value).toBe('')

		fireEvent.change(input, {
			target: {
				value: 'ipod'
			}
		})

		expect(input.value).toBe('ipod')
	})

	it('Should render click for search item', () => {
		const { getByRole, getByTestId } = render(<Search placeholder="any-placeholder" />)

		const router = { push: jest.fn() }
		useRouter.mockReturnValue(router)

		const input = getByTestId('input-search') as HTMLInputElement

		expect(input.value).toBe('')

		fireEvent.change(input, {
			target: {
				value: 'ipod'
			}
		})

		const button = getByRole('button')

		fireEvent.click(button)
		expect(router.push).toHaveBeenCalledWith('/items?search=ipod')
	})

	it('Should render keypress enter for search item', () => {
		const { getByTestId } = render(<Search placeholder="any-placeholder" />)

		const router = { push: jest.fn() }
		useRouter.mockReturnValue(router)

		const input = getByTestId('input-search') as HTMLInputElement

		expect(input.value).toBe('')

		fireEvent.change(input, {
			target: {
				value: 'ipod'
			}
		})

		fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 })
		expect(router.push).toHaveBeenCalledWith('/items?search=ipod')
	})
})
