import { useState } from "react";

import ApplicantInfo from "./components/ApplicantInfo";
import ContactInfo from "./components/ContactInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

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

  const [isEditing, setIsEditing] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <div className="resume-container">
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
        setContactInfo={setContactInfo}
        setShowOutput={setShowOutput}
        isEditing={isEditing}
      />
      <h2>Education</h2>
      <Education
        schoolName={education.schoolName}
        programTitle={education.programTitle}
        programDate={education.programDate}
        setEducation={setEducation}
        setShowOutput={setShowOutput}
        isEditing={isEditing}
      />
      <h2>Experience</h2>
      <Experience
        companyName={experience.companyName}
        positionTitle={experience.positionTitle}
        responsibilities={experience.responsibilities}
        startDate={experience.startDate}
        endDate={experience.endDate}
        setExperience={setExperience}
        isEditing={isEditing}
      />
      {isEditing ? (
        <button onClick={() => setIsEditing(false)}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
    </div>
  );
}

export default App;
