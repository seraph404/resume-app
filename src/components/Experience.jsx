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
    <div>
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
                    value={item}
                    onChange={(e) =>
                      handleResponsibilityChange(index, e.target.value)
                    }
                  />
                  <button onClick={() => addInput(index)}>+</button>
                  <button onClick={() => removeInput(index)}>x</button>
                </div>
              ))}
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
        <>
          <p>{companyName}</p>
          <p>{positionTitle}</p>
          <ul>
            {responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
          <p>{startDate}</p>
          <p>{endDate}</p>
        </>
      )}
    </div>
  );
}

export default Experience;
