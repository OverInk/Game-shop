import React, { useContext } from 'react';

import style from './Search.module.scss';
import { MyContext } from '../../App';

const Search = () => {
  const { searchValue, setSearchValue } = useContext(MyContext);

  return (
    <div className={style.root}>
      <svg className={style.searchicon} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={style.search}
        placeholder="Поиск.."
      />
      {searchValue && <svg onClick={() => setSearchValue('')} className={style.iconTrash} />}
    </div>
  );
};

export default Search;
