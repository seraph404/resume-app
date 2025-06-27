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

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <div className="wrapper">
        <div className="input">
          <GeneralInfo
            fullName={generalInfo.fullName}
            email={generalInfo.email}
            phone={generalInfo.phone}
            setInfo={setGeneralInfo}
            setShowOutput={setShowOutput}
          />
          <Education />
          <Experience />
        </div>
        <div className="output">
          {showOutput.generalInfo && (
            <div>
              <h1>{generalInfo.fullName}</h1>
              <p>{generalInfo.email}</p>
              <p>{generalInfo.phone}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
