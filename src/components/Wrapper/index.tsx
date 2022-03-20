import React, { FC } from 'react'
import common from '../../styles/common.module.scss'

interface WrapperProps {
	children: React.ReactNode
}

const Wrapper: FC<WrapperProps> = ({ children }) => <main className={common.container}>{children}</main>

export default Wrapper
