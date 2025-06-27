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

  return (
    <div className="app">
      <h1>CV Builder</h1>
      <GeneralInfo
        fullName={generalInfo.fullName}
        email={generalInfo.email}
        phone={generalInfo.phone}
        setInfo={setGeneralInfo}
        info={generalInfo}
      />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
