
export const sortJobs = (jobsToSort, sortType) => {
    const sortedJobs = [...jobsToSort];
    
    switch (sortType) {
      case "Newest First":
        return sortedJobs.sort((a, b) => b.postedDate - a.postedDate);
      case "Oldest First":
        return sortedJobs.sort((a, b) => a.postedDate - b.postedDate);
      case "Deadline Soonest":
        return sortedJobs.sort((a, b) => a.daysLeft - b.daysLeft);
      case "Deadline Latest":
        return sortedJobs.sort((a, b) => b.daysLeft - a.daysLeft);
      case "Company A-Z":
        return sortedJobs.sort((a, b) => a.companyName.localeCompare(b.companyName));
      case "Company Z-A":
        return sortedJobs.sort((a, b) => b.companyName.localeCompare(a.companyName));
      case "Title A-Z":
        return sortedJobs.sort((a, b) => a.category.localeCompare(b.category));
      case "Title Z-A":
        return sortedJobs.sort((a, b) => b.category.localeCompare(a.category));
      default:
        return sortedJobs;
    }
  };
  
 

  export const filterJobs = (jobs, { searchQuery, category, type }) => {
    if (!jobs || !jobs.length) return [];
    
    let results = [...jobs];
    
    if (searchQuery && searchQuery.trim()) {
      const searchLower = searchQuery.toLowerCase();
      results = results.filter(job => 
        job.category.toLowerCase().includes(searchLower) || 
        job.companyName.toLowerCase().includes(searchLower) ||
        job.location.toLowerCase().includes(searchLower)
      );
    }
    
    if (category && category !== "All Jobs") {
      results = results.filter(job => job.category === category);
    }
    
    if (type && type !== "All Types") {
      results = results.filter(job => job.jobType === type);
    }
    
    return results;
  };
  
 
  export const getPaginationInfo = (items, currentPage, itemsPerPage) => {
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    
    return {
      totalItems,
      totalPages,
      startIndex,
      endIndex,
      currentPageItems: items.slice(startIndex, endIndex),
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1
    };
  };