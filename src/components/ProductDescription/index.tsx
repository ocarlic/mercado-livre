import styles from './productDescription.module.scss'

export interface ProductDescriptionProps {
	description: string
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
	return (
		<div className={styles.container__description}>
			<h3>Descrição do produto</h3>

			<p>{description}</p>
		</div>
	)
}
