import styles from './productImage.module.scss'

interface ProductImageProps {
	alt: string
	picture: string
}

export default function ProductImage({ alt, picture }: ProductImageProps) {
	return (
		<div className={styles.container__image}>
			<img width="100%" height="100%" alt={alt} src={picture} />
		</div>
	)
}
