import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';

type PaginateProps = {
 currentPage:number;
 onChangePage: (event:number) => void;
}

const Pagination:React.FC<PaginateProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel="N >"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
      previousLabel="< P"
      // renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
