import React from 'react';

const Button = ({ postPerPage, allPosts, nextPage }) => {
  const pageCount = [];

  for (let i = 1; i <= Math.ceil(allPosts / postPerPage); i++) {
    pageCount.push(i);
  }

  return (
    <div className='btn-section'>
      <ul>
        {pageCount.map((page) => (
          <li key={page}>
            <a href="#!" onClick={() => nextPage(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Button;
