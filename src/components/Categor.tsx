import React from 'react';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';

type CategorProps = {
  valueCategor: number;
  onChangeCategor: (i: number) => void;
};

const Categor: React.FC<CategorProps> = ({ valueCategor, onChangeCategor }) => {
  const categor = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  useWhyDidYouUpdate('Categor', { valueCategor, onChangeCategor });

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
};

export default Categor;
