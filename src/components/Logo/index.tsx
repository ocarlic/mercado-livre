import React, { FC } from 'react'
import Image from 'next/image'

const Logo: FC = () => (
	<a href="/">
		<Image alt="Logo Mercado Libre" src="/assets/images/logo.png" loading="eager" width="53px" height="36px" />
	</a>
)

export default Logo
