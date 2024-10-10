import React from 'react';
import './Pagination.css';

const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className={currentPage === number ? 'active' : ''}>
          <a onClick={() => paginate(number)}>{number}</a>
        </li>
      ))}
    </div>
  );
};

export default Pagination;