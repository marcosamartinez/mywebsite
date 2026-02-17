import React from "react";
import "./resume.css";
import { RESUME_URL } from "../../config/resume";

const Resume = () => {
  const hasResume = RESUME_URL && RESUME_URL.trim() !== "";

  return (
    <div className="resume-page">
      <h2>Resume</h2>

      {hasResume ? (
        <>
          <div className="resume-actions">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View / Download Resume
            </a>
          </div>
          <div className="resume-preview-box">
            <iframe
              src={RESUME_URL}
              title="Resume"
              className="resume-preview-iframe"
            />
          </div>
        </>
      ) : (
        <div className="resume-placeholder">
          <p>Add your resume link to display it here.</p>
          <p className="resume-instructions">
            Edit <code>src/config/resume.js</code> and set <code>RESUME_URL</code> to your
            resume PDF link (e.g. Google Drive share link or <code>/resume.pdf</code> if you
            put the file in <code>public/</code>).
          </p>
        </div>
      )}
    </div>
  );
};

export default Resume;
