import { useState } from "react";

import ApplicantInfo from "./components/ApplicantInfo";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

import "./styles/App.css";

function App() {
  const [applicantInfo, setApplicantInfo] = useState({
    fullName: "",
    jobTitle: "",
    summary: "",
  });

  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    website: "",
  });

  const [showOutput, setShowOutput] = useState({
    applicantInfo: false,
    contactInfo: false,
    education: false,
    experience: false,
  });

  const [education, setEducation] = useState({
    schoolName: "",
    programTitle: "",
    programDate: "",
  });

  const [experience, setExperience] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: [""],
    startDate: "",
    endDate: "",
  });

  const [skills, setSkills] = useState([""]);

  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function renderSections() {
    return (
      <>
        <ApplicantInfo
          fullName={applicantInfo.fullName}
          jobTitle={applicantInfo.jobTitle}
          summary={applicantInfo.summary}
          setApplicantInfo={setApplicantInfo}
          setShowOutput={setShowOutput}
          isEditing={isEditing}
        />
        <ContactInfo
          email={contactInfo.email}
          phone={contactInfo.phone}
          website={contactInfo.website}
          setContactInfo={setContactInfo}
          setShowOutput={setShowOutput}
          isEditing={isEditing}
        />
        <Experience
          companyName={experience.companyName}
          positionTitle={experience.positionTitle}
          responsibilities={experience.responsibilities}
          startDate={experience.startDate}
          endDate={experience.endDate}
          setExperience={setExperience}
          isEditing={isEditing}
        />
        <Education
          schoolName={education.schoolName}
          programTitle={education.programTitle}
          programDate={education.programDate}
          setEducation={setEducation}
          setShowOutput={setShowOutput}
          isEditing={isEditing}
        />
        <Skills skills={skills} setSkills={setSkills} isEditing={isEditing} />
      </>
    );
  }

  return isEditing ? (
    <form
      className="form-container"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setIsEditing(false);
      }}
    >
      <h1>CV Creator</h1>
      {renderSections()}
      <button type="submit">Save</button>
    </form>
  ) : (
    <div className="resume-container">
      {renderSections()}
      <button id="edit-button" onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </div>
  );
}

export default App;
