import { useState } from 'react';

function Categor() {
  const [chooseCategor, setChoosecategor] = useState(0);

  const clickChooseCategor = (index) => {
    setChoosecategor(index);
  };

  const categor = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categor.map((val, i) => (
          <li onClick={() => clickChooseCategor(i)} className={chooseCategor === i ? 'active' : ''}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categor;
