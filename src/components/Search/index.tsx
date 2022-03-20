import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'

import styles from './search.module.scss'
import Image from 'next/image'
import { removeAcentsWords } from '../../utils/format-values'

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
}

const Search: FC<SearchProps> = ({ placeholder }) => {
	const [ search, setSearch ] = useState('')
	const router = useRouter()

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(removeAcentsWords(e.target.value))
	}

	const handleGetItemSearch = () => {
		if (search !== '') router.push(`/items?search=${search}`)
	}

	const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') handleGetItemSearch()
	}

	return (
		<div className={styles.search}>
			<input
				value={search}
				type="text"
				data-testid="input-search"
				onChange={(e) => handleSearch(e)}
				onKeyPress={(e) => handleEnterPress(e)}
				placeholder={placeholder}
			/>

			<button aria-label="search" type="button" onClick={handleGetItemSearch}>
				<Image width="20px" height="20px" src="/assets/images/search.png" alt='icon search' />
			</button>
		</div>
	)
}

export default Search
