import React, { FC } from 'react'
import styles from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	onClick?: () => void
}

const Button: FC<ButtonProps> = ({ children, onClick }) => (
	<button className={styles.button} onClick={onClick}>
		{children}
	</button>
)

export default Button
