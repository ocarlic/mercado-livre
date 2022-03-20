import { formatValueMoney } from '../../../../utils/format-values'
import styles from './itemDescription.module.scss'

interface ItemDescriptionProps {
	price: number
	free_shipping: boolean
	title: string
}

export default function ItemDescription({ price, title, free_shipping }: ItemDescriptionProps) {
	return (
		<div className={styles.item__description}>
			<span>
				<p data-testid="data-price">{formatValueMoney(price)}</p>

				{free_shipping && (
					<img data-testid="data-free_shipping" alt="Entrega grátis" src="/assets/images/shipping.png" />
				)}
			</span>

			<p data-testid="data-title">{title}</p>
		</div>
	)
}
