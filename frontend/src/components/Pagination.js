import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from '@material-ui/core/styles';
import {Pagination} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const PaginationBar = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }
    const classes = useStyles();
    return (
        // <nav className="pagination-div" style={{textAlign: 'center'}}>
        //     <ul className="pagination pagination-lg">
        //         {pageNumbers.map(number => (
        //             <li key={number} className='page-item'>
        //                 <a href='#' className='page-link' onClick={() => paginate(number)}>
        //                     {number}
        //                 </a>
        //             </li>
        //         ))}
        //     </ul>
        //  </nav>
        <>
            <Pagination className="paginationBar" count={pageNumbers.length} color="primary" onChange={paginate}  />

        </>
        
    )
}

export default PaginationBar
