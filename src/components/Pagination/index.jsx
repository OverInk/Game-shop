import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';

const Pagination = ({ value, onChangePage }) => {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel="N >"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={value - 1}
      previousLabel="< P"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
