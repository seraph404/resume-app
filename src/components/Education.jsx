import { useState } from "react";

function Education({
  schoolName,
  programTitle,
  programDate,
  setEducation,
  setShowOutput,
  isEditing,
}) {
  function handleChange(event) {
    const { name, value } = event.target;

    setEducation((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  return (
    <div>
      {isEditing ? (
        <>
          <fieldset>
            <legend>Education</legend>
            <div>
              <label>School name</label>
              <br />
              <input
                type="text"
                name="schoolName"
                value={schoolName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Program title</label>
              <br />
              <input
                type="text"
                name="programTitle"
                value={programTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Program date</label>
              <br />
              <input
                type="date"
                name="programDate"
                value={programDate}
                onChange={handleChange}
                maxLength="10"
                required
              />
            </div>
          </fieldset>
        </>
      ) : (
        <>
          <div className="right-column">
            <p>{schoolName}</p>
            <p>{programTitle}</p>
            <p>{programDate}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Education;
