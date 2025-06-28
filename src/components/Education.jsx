import { useState } from "react";

function Education({
  schoolName,
  programTitle,
  programDate,
  setEducation,
  setShowOutput,
}) {
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;

    setEducation((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <>
          <div>
            <label>School name:</label>{" "}
            <input
              type="text"
              name="schoolName"
              value={schoolName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Program title:</label>{" "}
            <input
              type="text"
              name="programTitle"
              value={programTitle}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Program date:</label>{" "}
            <input
              type="date"
              name="programDate"
              value={programDate}
              onChange={handleChange}
              maxLength="10"
              required
            />
          </div>
          <div>
            <input type="submit" value="Update" onClick={handleSubmit}></input>
          </div>
        </>
      ) : (
        <>
          <p>{schoolName}</p>
          <p>{programTitle}</p>
          <p>{programDate}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Education;
