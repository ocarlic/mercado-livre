import { GetServerSideProps } from 'next'
import { ProductList, Products } from './type'
import { api } from '../../services/api'
import { GET_SEARCH_ITEMS } from '../../utils/endpoints'

import styles from './items.module.scss'
import ListItem from '../../components/ListItem'
import Wrapper from '../../components/Wrapper'

export default function Item({ item, query }: ProductList) {
	return (
		<Wrapper>
			<div className={styles.container}>
				<ListItem item={item} query={query} />
			</div>
		</Wrapper>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const params = context.query.search
	const response = await api.get(`${GET_SEARCH_ITEMS}${params}`)

	const items = response.data.results.slice(0, 4)
	const query = response.data.query

	const item = items.map((item: Products) => ({
		id: item.id,
		price: item.price,
		title: item.title,
		thumbnail: item.thumbnail,
		address: {
			state_name: item.address.state_name
		},
		shipping: {
			free_shipping: item.shipping.free_shipping
		}
	}))

	return {
		props: {
			item,
			query
		}
	}
}
