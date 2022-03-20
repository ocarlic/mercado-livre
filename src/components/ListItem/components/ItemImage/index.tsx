interface ItemImageProps {
	alt: string
	src: string
	width: string
	height: string
}

export default function ItemImage({ alt, src, width, height }: ItemImageProps) {
	return <img alt={alt} src={src} width={`${width}`} height={`${height}`} />
}
