import { useState } from "react";

function ApplicantInfo({
  fullName,
  jobTitle,
  summary,
  setApplicantInfo,
  isEditing,
}) {
  function handleApplicantChange(event) {
    const { name, value } = event.target;

    setApplicantInfo((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  return (
    <>
      {isEditing ? (
        <>
          <fieldset>
            <legend>Applicant info</legend>
            <div>
              <label>Full name</label>
              <br />
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleApplicantChange}
                required
              />
            </div>
            <div>
              <label>Job title</label>
              <br />
              <input
                type="text"
                name="jobTitle"
                value={jobTitle}
                onChange={handleApplicantChange}
                required
              />
            </div>
            <div>
              <label>Summary</label>
              <br />
              <textarea
                name="summary"
                value={summary}
                onChange={handleApplicantChange}
                required
              ></textarea>
            </div>
          </fieldset>
        </>
      ) : (
        <>
          {" "}
          <div className="applicant-info section">
            <h2 class="info">{fullName}</h2>
            <div class="job-title info">
              <p>{jobTitle}</p>
            </div>
            <div class="summary info">
              <h3>Summary</h3>
              <p>{summary}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ApplicantInfo;
