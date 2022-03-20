import React, { FC } from 'react'
import Logo from '../Logo'
import Search from '../Search'

import styles from './header.module.scss'
import common from '../../styles/common.module.scss'

const Header: FC = () => (
	<header className={styles.wrapper}>
		<div className={common.container}>
			<Logo />

			<Search placeholder="Buscar produtos, marcas e muito mais..." />
		</div>
	</header>
)

export default Header
