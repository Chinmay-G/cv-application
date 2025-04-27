import "./App.css";
import InputSection from "./components/InputSection";
import PreviewSection from "./components/PreviewSection";
import OptionsSection from "./components/OptionsSection";
import { useState } from "react";

function App() {
  const sampleData = {
    personalDetails: {},
    education: [],
    experience: [],
  };

  const [allData, setAllData] = useState(sampleData);

  return (
    <>
      <header>
        <h1>Resume Generator</h1>
      </header>
      <main className="container">
        <InputSection allData={allData} setAllData={setAllData} />
        <PreviewSection
          personalDetails={allData.personalDetails}
          education={allData.education}
          experience={allData.experience}
        />
        <OptionsSection />
      </main>
    </>
  );
}

export default App;
