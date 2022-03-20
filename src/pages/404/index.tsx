import Link from 'next/link'
import Button from '../../components/Button'
import common from '../../styles/common.module.scss'
import styles from './page404.module.scss'

export default function Page404() {
	return (
		<section className={common.container}>
			<div className={styles.warningPage}>
				<h3>Página não encontrada :(</h3>

				<Link href="/">
					<a>
						<Button>Voltar para home</Button>
					</a>
				</Link>
			</div>
		</section>
	)
}
