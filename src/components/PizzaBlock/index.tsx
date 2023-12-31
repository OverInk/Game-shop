import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { addItem } from '../../redux/slices/cart/slice';
import { CartItem } from '../../redux/slices/cart/types';
import { selectCartItemById } from '../../redux/slices/cart/selectors';

const typeNames = ['тонкое', 'традиционные'];

type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  sizes: any;
  imgUrl: string;
  types: any;
  skills: string;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imgUrl,
  sizes,
  types,
  skills,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));
  const [activeType, setActiveType] = useState(0);
  const [actievSize, setactiveSize] = useState(0);

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imgUrl,
      type: typeNames[activeType],
      sixe: sizes[actievSize],
      count: 0,
    };
    dispatch(addItem(item));
  };

  //   const onClickAdd = () => {
  //     const item = [id, title, price, imgUrl, activeType, actievSize];
  //     dispatch(addItem(item));
  //   };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link key={id} to={`/game/${id}`}>
          <h4 className="pizza-block__title">{title}</h4>
          <img className="pizza-block__image" src={imgUrl} alt="Pizza" />
        </Link>
        <div>{skills}</div>
        <div className="pizza-block__selector">
          <ul>
            {types?.map((typeId: number) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? 'active' : ''}>
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes?.map((sice: number, index: number) => (
              <li
                key={index}
                onClick={() => setactiveSize(index)}
                className={actievSize === index ? 'active' : ''}>
                {sice} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price"> от {price}</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
