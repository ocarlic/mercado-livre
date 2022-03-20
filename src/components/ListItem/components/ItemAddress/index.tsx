import styles from './itemAddress.module.scss'

interface ItemAddressProps {
	state_name: string
}

export default function ItemAddress({ state_name }: ItemAddressProps) {
	return <span className={styles.address}>{state_name}</span>
}
