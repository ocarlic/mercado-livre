import ItemDescription from './components/ItemDescription'
import { ProductList } from '../../types/items'

import styles from './listItem.module.scss'
import ItemAddress from './components/ItemAddress'
import ItemImage from './components/ItemImage'
import Empty from './components/Empty'

const ListItem = ({ item, query }: ProductList) => (
	<nav className={styles.list}>
		<ol>
			{item.length ? (
				<li>
					{item.map((list) => (
						<a key={list.id} href={`/items/${list.id}`}>
							<ItemImage src={list.thumbnail} alt={list.title} width="180px" height="180px" />

							<ItemDescription
								price={list.price}
								title={list.title}
								free_shipping={list.shipping.free_shipping}
							/>

							<ItemAddress state_name={list.address.state_name} />
						</a>
					))}
				</li>
			) : (
				<Empty query={query} />
			)}
		</ol>
	</nav>
)

export default ListItem
