import { formatValueMoney } from '../../utils/format-values'
import Button from '../Button'
import styles from './productInfo.module.scss'

interface ProductInfoProps {
	title: string
	price: number
	sold_quantity: number
}

export default function ProductInfo({ title, sold_quantity, price }: ProductInfoProps) {
	return (
		<div className={styles.container__info}>
			<span>{`${sold_quantity} vendidos`}</span>
			<h2>{title}</h2>
			<p>{formatValueMoney(price)}</p>

			<Button onClick={() => {}}>Comprar</Button>
		</div>
	)
}
