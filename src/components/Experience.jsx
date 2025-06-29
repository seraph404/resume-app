import { useState } from "react";

function Experience({
  companyName,
  positionTitle,
  responsibilities,
  startDate,
  endDate,
  setExperience,
  isEditing,
}) {
  function handleChange(event) {
    const { name, value } = event.target;

    setExperience((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  function handleResponsibilityChange(index, newValue) {
    const newResponsibilities = [...responsibilities];
    newResponsibilities[index] = newValue;

    setExperience((previousState) => ({
      ...previousState,
      responsibilities: newResponsibilities,
    }));
  }

  function addInput(index) {
    console.log(index);
    // clones the state array
    const newResponsibilities = [...responsibilities];
    // adds new item to the cloned array
    newResponsibilities.splice(index + 1, 0, "");
    // updates the state with the cloned array
    setExperience((previousState) => ({
      ...previousState,
      responsibilities: newResponsibilities,
    }));
  }

  function formatDate(date) {
    if (!date) return;
    const dateObj = new Date(date);

    const formatted = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(dateObj);

    return formatted;
  }

  function removeInput(index) {
    console.log(index);
    // clones the state array
    const newResponsibilities = [...responsibilities];
    // removes item from the cloned array
    newResponsibilities.splice(index, 1);
    // makes it so that one input appears even when nothing is in the array
    if (newResponsibilities.length === 0) {
      newResponsibilities.push("");
    }

    // updates state array
    setExperience((previousState) => ({
      ...previousState,
      responsibilities: newResponsibilities,
    }));
  }

  return (
    <>
      {isEditing ? (
        <>
          <fieldset>
            <legend>Experience</legend>
            <div>
              <label>Company name</label>
              <br />
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Position title</label>
              <br />
              <input
                type="text"
                name="positionTitle"
                value={positionTitle}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Responsibilities</label>
              <br />
              {responsibilities.map((item, index) => (
                <div key={index}>
                  <input
                    type="text"
                    className="dynamic"
                    value={item}
                    onChange={(e) =>
                      handleResponsibilityChange(index, e.target.value)
                    }
                  />
                </div>
              ))}

              <div class="buttons">
                <button
                  type="button"
                  onClick={() => addInput(responsibilities.length - 1)}
                >
                  Add Row
                </button>
                <button
                  type="button"
                  onClick={() => removeInput(responsibilities.length - 1)}
                >
                  Remove Row
                </button>
              </div>
            </div>
            <div>
              <label>Start date</label>
              <br />
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>End date</label>
              <br />
              <input
                type="date"
                name="endDate"
                value={endDate}
                onChange={handleChange}
                required
              />
            </div>
          </fieldset>
        </>
      ) : (
        <div className="experience section">
          <h3>Work experience</h3>
          <div class="position info">
            <p>
              {positionTitle} @ {companyName}
            </p>
          </div>
          <div class="position-dates info">
            <p>
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
          </div>
          <strong class="responsibilities">Responsibilities:</strong>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Experience;
