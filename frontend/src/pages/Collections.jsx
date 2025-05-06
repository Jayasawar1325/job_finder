import React, { useState, useEffect } from 'react';
import { useJobStore } from '../store/useJobStore';
import JobCard from '../components/JobCard';
import PaginationControls from '../components/PaginationControls';
import SearchFilters from '../components/SearchFilters';
import { sortJobs,filterJobs,getPaginationInfo } from '../utils/jobUtils';
const Collections = () => {
  const { jobs, getJobsData } = useJobStore();
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState("All Jobs");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedSort, setSelectedSort] = useState("Newest First");
  
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(9); 
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getJobsData();
  }, [getJobsData]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  useEffect(() => {
    applyFilters();
  }, [debouncedSearch, selectedCategory, selectedType, selectedSort, jobs]);

  const applyFilters = () => {
    if (!jobs.length) return;
    
    const filtered = filterJobs(jobs, {
      searchQuery: debouncedSearch,
      category: selectedCategory,
      type: selectedType
    });
    
    const sorted = sortJobs(filtered, selectedSort);
    
    setFilteredJobs(sorted);
    
    const calculatedTotalPages = Math.ceil(sorted.length / jobsPerPage);
    setTotalPages(calculatedTotalPages);
    
    if (currentPage > calculatedTotalPages) {
      setCurrentPage(1);
    }
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'category') {
      setShowCategoryDropdown(!showCategoryDropdown);
      setShowTypeDropdown(false);
      setShowSortDropdown(false);
    } else if (dropdown === 'type') {
      setShowTypeDropdown(!showTypeDropdown);
      setShowCategoryDropdown(false);
      setShowSortDropdown(false);
    } else if (dropdown === 'sort') {
      setShowSortDropdown(!showSortDropdown);
      setShowCategoryDropdown(false);
      setShowTypeDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setShowCategoryDropdown(false);
      setShowTypeDropdown(false);
      setShowSortDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = (e, dropdown) => {
    e.stopPropagation();
    toggleDropdown(dropdown);
  };
  
  const handlePageChange = (pageNumber) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(pageNumber);
  };

  const handleJobsPerPageChange = (newJobsPerPage) => {
    const firstJobIndex = (currentPage - 1) * jobsPerPage;
    const newPage = Math.floor(firstJobIndex / newJobsPerPage) + 1;
    
    setJobsPerPage(newJobsPerPage);
    setCurrentPage(newPage);
    
    setTotalPages(Math.ceil(filteredJobs.length / newJobsPerPage));
  };

  const getCurrentPageJobs = () => {
    const { currentPageItems } = getPaginationInfo(filteredJobs, currentPage, jobsPerPage);
    return currentPageItems;
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <SearchFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        showCategoryDropdown={showCategoryDropdown}
        showTypeDropdown={showTypeDropdown}
        showSortDropdown={showSortDropdown}
        handleDropdownClick={handleDropdownClick}
      />

      <div className="mb-4 text-sm text-gray-600 flex flex-col md:flex-row justify-between">
        <div>
          {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          {debouncedSearch ? ` matching "${debouncedSearch}"` : ''}
          {selectedCategory !== "All Jobs" ? ` in ${selectedCategory}` : ''}
          {selectedType !== "All Types" ? ` (${selectedType})` : ''}
        </div>
        
        {filteredJobs.length > 0 && (
          <div className="mt-1 md:mt-0">
            Showing {Math.min((currentPage - 1) * jobsPerPage + 1, filteredJobs.length)} - {Math.min(currentPage * jobsPerPage, filteredJobs.length)} of {filteredJobs.length}
          </div>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-800 mb-4">
          {filteredJobs.length > 0 ? 'Available Jobs' : 'No jobs match your criteria'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getCurrentPageJobs().map((job, index) => (
            <JobCard key={`job-${index}`} job={job} />
          ))}
        </div>
        
        {filteredJobs.length > 0 && totalPages > 1 && (
          <PaginationControls 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            jobsPerPage={jobsPerPage}
            onJobsPerPageChange={handleJobsPerPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default Collections;