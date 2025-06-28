import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const [showOutput, setShowOutput] = useState({
    generalInfo: false,
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

  return (
    <div className="app">
      <div className="wrapper">
        <section>
          <GeneralInfo
            fullName={generalInfo.fullName}
            email={generalInfo.email}
            phone={generalInfo.phone}
            setInfo={setGeneralInfo}
            setShowOutput={setShowOutput}
          />
        </section>
        <section>
          <h2>Education</h2>
          <Education
            schoolName={education.schoolName}
            programTitle={education.programTitle}
            programDate={education.programDate}
            setEducation={setEducation}
            setShowOutput={setShowOutput}
          />
        </section>
        <h2>Experience</h2>
        <Experience
          companyName={experience.companyName}
          positionTitle={experience.positionTitle}
          responsibilities={experience.responsibilities}
          startDate={experience.startDate}
          endDate={experience.endDate}
          setExperience={setExperience}
        />
      </div>
    </div>
  );
}

export default App;
