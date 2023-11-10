import { CartItem } from '../redux/slices/cart/types';

export const calcTotalPrice = (items: CartItem[]) => {
  return state.items.reduce((sum, object) => {
    return object.price * object.count + sum;
  }, 0);
};
