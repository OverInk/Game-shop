import { useState } from 'react';

function Categor({ valueCategor, onChangeCategor }) {
  const categor = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categor.map((val, i) => (
          <li
            key={i}
            onClick={() => onChangeCategor(i)}
            className={valueCategor === i ? 'active' : ''}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categor;
