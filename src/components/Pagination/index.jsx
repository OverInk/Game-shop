import React from 'react';
import ReactPaginate from 'react-paginate';

import style from './Pagination.module.scss';

const Pagination = ({onChangePage }) => {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={10}
      pageCount={3}
      // forcePage={currentPage - 1}
      previousLabel="< P"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
