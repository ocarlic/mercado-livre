export type Products = {
  id: string;
  price: number;
  title: string;
  thumbnail: string;
  shipping: {
    free_shipping: boolean;
  }
  address: {
    state_name: string;
  }
}

export type Product = {
  id: string;
  title: string;
  price: number;
  pictures: {
    secure_url: string;
  }
  sold_quantity: number;
  description: string;
}

export interface ProductList {
  item: Products[];
  query?: string;
}

export interface Item {
  product: Product
}
