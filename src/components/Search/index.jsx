import React from 'react';

import style from './Search.module.scss';

const Search = () => {
  return (
	<div className={style.root}>
		<svg className={style.searchicon} />
		<input className={style.search} placeholder='Поиск..' />
	</div>
  )
}

export default Search;
