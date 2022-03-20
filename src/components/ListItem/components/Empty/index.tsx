import styles from './empty.module.scss'

interface EmptyProps {
	query?: string
}

export default function Empty({ query }: EmptyProps) {
	return <p className={styles.container}>{`Não encontramos o produto "${query}" na busca`}</p>
}
