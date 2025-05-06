import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

// Filter data options
const jobCategories = [
  "All Jobs",
  "UI/UX Designer",
  "Graphics Designer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Java Developer",
  "Junior QA",
  "React Developer",
  "Product Manager",
  "Data Analyst",
  "Digital Marketing Specialist"
];

const jobTypes = [
  "All Types",
  "Full Time",
  "Part Time",
  "Internship",
  "Freelance",
  "Remote",
  "Contract",
  "Temporary",
  "Volunteer",
  "Hybrid"
];

const sortOptions = [
  "Newest First",
  "Oldest First",
  "Deadline Soonest",
  "Deadline Latest",
  "Company A-Z",
  "Company Z-A",
  "Title A-Z",
  "Title Z-A"
];

const SearchFilters = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedType,
  setSelectedType,
  selectedSort,
  setSelectedSort,
  showCategoryDropdown,
  showTypeDropdown,
  showSortDropdown,
  handleDropdownClick
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-3">
      <div className="relative w-full md:w-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input 
          type="text" 
          placeholder="Search job titles or locations..." 
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-96 focus:outline-none "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {/* Job Categories Dropdown */}
        <div className="relative">
          <button 
            className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm flex items-center gap-1"
            onClick={(e) => handleDropdownClick(e, 'category')}
          >
            {selectedCategory}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          
          {showCategoryDropdown && (
            <div className="absolute z-10 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {jobCategories.map((category, idx) => (
                <div 
                  key={idx} 
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCategory(category);
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Job Types Dropdown */}
        <div className="relative">
          <button 
            className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm flex items-center gap-1"
            onClick={(e) => handleDropdownClick(e, 'type')}
          >
            {selectedType}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>   
          
          {showTypeDropdown && (
            <div className="absolute z-10 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {jobTypes.map((type, idx) => (
                <div 
                  key={idx} 
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedType(type);
                  }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Sort Options Dropdown */}
        <div className="relative">
          <button 
            className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm flex items-center gap-1"
            onClick={(e) => handleDropdownClick(e, 'sort')}
          >
            {selectedSort}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          
          {showSortDropdown && (
            <div className="absolute right-0 z-10 mt-1 w-44 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {sortOptions.map((option, idx) => (
                <div 
                  key={idx} 
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSort(option);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Export named constants for use in other files
export { jobCategories, jobTypes, sortOptions };
export default SearchFilters;