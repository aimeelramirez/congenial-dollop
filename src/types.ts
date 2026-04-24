export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  newArrival?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
