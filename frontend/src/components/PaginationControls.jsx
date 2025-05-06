import React from 'react';

const PaginationControls = ({ currentPage, totalPages, onPageChange, jobsPerPage, onJobsPerPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; 
    
    if (totalPages <= maxPagesToShow) {
     
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
     
      if (currentPage <= 3) {
      
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };
  
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-2">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1 
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
        }`}
      >
        Previous
      </button>
      
      <div className="flex space-x-2">
        {getPageNumbers().map((page, index) => (
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="px-3 py-1">...</span>
          ) : (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(page)}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {page}
            </button>
          )
        ))}
      </div>
      
      <button 
        onClick={() => onPageChange(currentPage + 1)} 
        disabled={currentPage === totalPages || totalPages === 0}
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages || totalPages === 0
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
        }`}
      >
        Next
      </button>
      
      <div className="ml-0 md:ml-4 flex items-center">
        <span className="text-sm text-gray-600 mr-2">Jobs per page:</span>
        <select 
          value={jobsPerPage}
          onChange={(e) => onJobsPerPageChange(Number(e.target.value))}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value={6}>6</option>
          <option value={9}>9</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </select>
      </div>
    </div>
  );
};

export default PaginationControls;