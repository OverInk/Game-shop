import React from 'react';
import ReactPaginate from 'react-paginate';


import style from './Pagination.module.scss'



const Pagination = ({onChangePage}) => {
  return (
	<ReactPaginate
		className={style.root}
		breakLabel="..."
		nextLabel=">"
		onPageChange={(event) => onChangePage(event.selected +1)}
		pageRangeDisplayed={5}
		pageCount={2}
		previousLabel="<"
		renderOnZeroPageCount={null}
	/>
  )
}

export default Pagination;
