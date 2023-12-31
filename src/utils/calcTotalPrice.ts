import { CartItem } from '../redux/slices/cart/types';

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, object) => object.price * object.count + sum, 0);
};
