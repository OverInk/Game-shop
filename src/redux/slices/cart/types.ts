export type CartItem = {
  id: string;
  title: string;
  price: number;
  imgUrl: string;
  type: string;
  sixe: number;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
