import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import style from './Search.module.scss';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filter/slice';

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    //  if (inputRef.current) {
    // 	inputRef.current.focus();
    //  }
    inputRef.current?.focus();
  };

  const updateSearch = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  const onTestDebounce = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearch(event.target.value);
  };

  return (
    <div className={style.root}>
      <svg className={style.searchicon} />
      <input
        ref={inputRef}
        value={value}
        onChange={onTestDebounce}
        className={style.search}
        placeholder="Поиск.."
      />
      {value && <svg onClick={onClickClear} className={style.iconTrash} />}
    </div>
  );
};

export default Search;
