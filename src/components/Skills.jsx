import { useState } from "react";

function Skills({ skills, setSkills, isEditing }) {
  function handleSkillsChange(index, newValue) {
    const newSkills = [...skills];
    newSkills[index] = newValue;

    setSkills(newSkills);
  }

  function addInput(index) {
    const newSkills = [...skills];
    newSkills.splice(index + 1, 0, "");
    setSkills(newSkills);
  }

  function removeInput(index) {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    if (newSkills.length === 0) {
      newSkills.push("");
    }

    setSkills(newSkills);
  }

  return (
    <>
      {isEditing ? (
        <>
          <fieldset>
            <legend>Skills</legend>
            <div>
              <label>Skills</label>
              <br />
              {skills.map((item, index) => (
                <div key={index}>
                  <input
                    type="text"
                    className="dynamic"
                    value={item}
                    onChange={(e) => handleSkillsChange(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div className="buttons">
              <button type="button" onClick={() => addInput(skills.length - 1)}>
                Add Row
              </button>
              <button
                type="button"
                onClick={() => removeInput(skills.length - 1)}
              >
                Remove Row
              </button>
            </div>
          </fieldset>
        </>
      ) : (
        <div class="skills section">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Skills;
