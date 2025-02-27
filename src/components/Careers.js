// CareerPage.jsx
import React, { useState, useEffect } from 'react';
import JobCard from './Jobs';
import '../Style/Careers.css';

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        setTimeout(() => {
          const data = [
            {
              id: 1,
              title: "Frontend Developer",
              department: "Engineering",
              location: "San Francisco, CA",
              type: "Full-time",
              description: "We're looking for a frontend developer with experience in React to join our growing team."
            },
            {
              id: 2,
              title: "UX Designer",
              department: "Design",
              location: "Remote",
              type: "Full-time",
              description: "Join our design team to create beautiful and intuitive user experiences for our products."
            },
            {
              id: 3,
              title: "Product Manager",
              department: "Product",
              location: "New York, NY",
              type: "Full-time",
              description: "Lead product initiatives and work closely with engineering, design, and marketing teams."
            },
            {
              id: 4,
              title: "DevOps Engineer",
              department: "Engineering",
              location: "Austin, TX",
              type: "Contract",
              description: "Help us build and maintain our cloud infrastructure and deployment pipelines."
            },
            {
              id: 5,
              title: "Marketing Intern",
              department: "Marketing",
              location: "Chicago, IL",
              type: "Internship",
              description: "Support our marketing team with content creation, social media, and campaign analysis."
            },
            {
              id: 6,
              title: "Backend Developer",
              department: "Engineering",
              location: "Bangalore",
              type: "Full-time",
              description: "Develop and maintain server-side applications using Node.js and Python."
            },
            {
              id: 7,
              title: "Data Scientist",
              department: "Analytics",
              location: "Hyderabad",
              type: "Full-time",
              description: "Analyze large datasets to extract insights and build predictive models for our products."
            },
            {
              id: 8,
              title: "Technical Writer",
              department: "Documentation",
              location: "Remote",
              type: "Part-time",
              description: "Create clear and comprehensive technical documentation for our API and developer tools."
            },
            {
              id: 9,
              title: "HR Manager",
              department: "Human Resources",
              location: "Mumbai",
              type: "Full-time",
              description: "Oversee all HR functions including recruitment, onboarding, and employee relations."
            },
            {
              id: 10,
              title: "QA Engineer",
              department: "Engineering",
              location: "Pune",
              type: "Full-time",
              description: "Ensure product quality through automated and manual testing processes."
            },
            {
              id: 11,
              title: "Project Coordinator",
              department: "Operations",
              location: "Hybrid - Mumbai",
              type: "Full-time",
              description: "Coordinate project activities, track milestones, and facilitate communication between teams."
            },
            {
              id: 12,
              title: "Mobile App Developer",
              department: "Engineering",
              location: "Hybrid - Bangalore",
              type: "Full-time",
              description: "Build native mobile applications for iOS and Android platforms."
            },
            {
              id: 13,
              title: "Content Strategist",
              department: "Marketing",
              location: "Hyderabad",
              type: "Contract",
              description: "Develop content strategy and create compelling marketing materials."
            },
            {
              id: 14,
              title: "Sales Representative",
              department: "Sales",
              location: "Pune",
              type: "Full-time",
              description: "Drive business growth by identifying and pursuing new sales opportunities."
            },
            {
              id: 15,
              title: "Customer Success Manager",
              department: "Customer Support",
              location: "Remote",
              type: "Full-time",
              description: "Ensure customer satisfaction and drive product adoption and retention."
            }
          ];
          setJobs(data);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === '' || job.type === filterType;
    const matchesLocation = filterLocation === '' || job.location.includes(filterLocation);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  // Get unique job types and locations for filters
  const jobTypes = [...new Set(jobs.map(job => job.type))];
  const locations = [...new Set(jobs.map(job => job.location))];

  return (
    <div className="career-page">
      {/* Header */}
      <header className="header-Ca">
        <div className="container-Ca">
          <h1>Join Our Team</h1>
          <p>Discover opportunities to grow your career and make an impact</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-Ca main-content">
        {/* Search and Filter Section */}
        <div className="search-section">
          <div className="search-container">
            <div className="search-icon">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search for job title, keyword, or department"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-section">
            <select
              className="filter-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="">All Job Types</option>
              {jobTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Jobs Count */}
        <div className="jobs-count">
          <h2>
            {filteredJobs.length} {filteredJobs.length === 1 ? 'Job' : 'Jobs'} Available
          </h2>
        </div>

        {/* Job Listings */}
        <div className="job-listings">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Loading jobs...</p>
            </div>
          ) : filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))
          ) : (
            <div className="empty-state">
              <svg className="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3>No jobs found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CareerPage;