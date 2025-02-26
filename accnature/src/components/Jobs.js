// JobCard.jsx
import React from 'react';
// import './JobCard.css';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="job-info">
          <h3 className="job-title">{job.title}</h3>
          <p className="job-meta">{job.department} • {job.location}</p>
        </div>
        <span className="job-type">
          {job.type}
        </span>
      </div>
      <p className="job-description">{job.description}</p>
      <div className="job-actions">
        <button className="btn-apply">
          Apply Now
        </button>
        <button className="btn-save">
          Save for Later
        </button>
      </div>
    </div>
  );
};

export default JobCard;