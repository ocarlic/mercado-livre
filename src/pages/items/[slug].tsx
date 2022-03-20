import { GetStaticProps } from 'next'
import { api } from '../../services/api'
import { GET_ITEM_ID, GET_ITEM_ID_DESCRIPTION } from '../../utils/endpoints'
import { Item } from './type'

import Wrapper from '../../components/Wrapper'
import ProductInfo from '../../components/ProductInfo'
import ProductImage from '../../components/ProductImage'
import ProductDescription from '../../components/ProductDescription'

import styles from './items.module.scss'

export default function Items({ product }: Item) {
  return (
    <Wrapper>
      <div className={styles.container}>
        <ProductImage
          alt={product.title}
          picture={product.pictures.secure_url}
        />

        <ProductInfo
          price={product.price}
          title={product.title}
          sold_quantity={product.sold_quantity}
        />

        <ProductDescription
          description={product.description}
        />
      </div>
    </Wrapper>
  )
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const responseId = await api.get(`${GET_ITEM_ID}/${params?.slug}`)
    const responseDescription = await api.get(
      `${GET_ITEM_ID}/${params?.slug}/${GET_ITEM_ID_DESCRIPTION}`
    )

    if (!responseId.data || responseId.data.error ) {
      return { notFound: true };
    }

    const product = {
      id: responseId.data.id,
      title: responseId.data.title,
      price: responseId.data.price,
      pictures: {
        secure_url: responseId.data.pictures[0].secure_url
      },
      sold_quantity: responseId.data.sold_quantity,
      description: responseDescription.data.plain_text,
    }

    return { props: { product } };
  } catch (err) {
    return { notFound: true };
  }
}
