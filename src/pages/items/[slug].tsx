import { GetStaticProps } from 'next'
import { api } from '../../services/api'
import { GET_ITEM_ID, GET_ITEM_ID_DESCRIPTION } from '../../utils/endpoints'
import { Item } from '../../types/items'

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
  const allPromise = Promise.all([
    api.get(`${GET_ITEM_ID}/${params?.slug}`),
    api.get(`${GET_ITEM_ID}/${params?.slug}/${GET_ITEM_ID_DESCRIPTION}`)
  ])

  try {
    const [item, description] = await allPromise

    if (!item.data || item.data.error ) {
      return { notFound: true };
    }

    const product = {
      id: item.data.id,
      title: item.data.title,
      price: item.data.price,
      pictures: {
        secure_url: item.data.pictures[0].secure_url
      },
      sold_quantity: item.data.sold_quantity,
      description: description.data.plain_text,
    }

    return { props: { product } };
  } catch(err) {
    return { notFound: true };
  }
}
