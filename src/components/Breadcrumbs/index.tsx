import { useRouter } from 'next/router'
import React, { FC } from 'react'
import common from '../../styles/common.module.scss'
import { formatBreadcrumbs } from '../../utils/format-values'
import styles from './breadcrumbs.module.scss'

const Breadcrumbs: FC = () => {
	const router = useRouter()

	const getBreadcrumbs = () => {
		const search = router.asPath.split(/[^\w\s]/gi)
		return formatBreadcrumbs(search)
	}

	return (
		<div className={common.container}>
			<p data-testid="data-breadcrumbs" className={styles.navegation}>
				{getBreadcrumbs()}
			</p>
		</div>
	)
}

export default Breadcrumbs
