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
    <div>
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
                    value={item}
                    onChange={(e) => handleSkillsChange(index, e.target.value)}
                  />
                  <button type="button" onClick={() => addInput(index)}>
                    +
                  </button>
                  <button type="button" onClick={() => removeInput(index)}>
                    x
                  </button>
                </div>
              ))}
            </div>
          </fieldset>
        </>
      ) : (
        <>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Skills;
