import "./App.css";
import { FilePen } from "lucide-react";
import { sampleData } from "./assets/data";
import InputSection from "./components/InputSection";
import PreviewSection from "./components/PreviewSection";
import OptionsSection from "./components/OptionsSection";
import { useState, useRef } from "react";
// import generatePDF from "react-to-pdf";
import html2pdf from "html2pdf.js";

function App() {
  const [allData, setAllData] = useState(sampleData);
  const [themeColor, setThemeColor] = useState("#000000");
  const targetRef = useRef();

  const emptyData = {
    personalDetails: {},
    education: [],
    experience: [],
  };

  function handleLoadExample() {
    if (JSON.stringify(allData) === JSON.stringify(emptyData)) {
      setAllData(sampleData);
      return;
    }

    if (JSON.stringify(allData) === JSON.stringify(sampleData)) {
      return;
    }

    window.confirm(
      "Loading Example will delete all existing data (if any). Continue?"
    )
      ? setAllData(sampleData)
      : null;
  }

  function handleClear() {
    if (JSON.stringify(allData) === JSON.stringify(emptyData)) {
      return;
    }
    if (JSON.stringify(allData) === JSON.stringify(sampleData)) {
      setAllData(emptyData);
      return;
    }

    window.confirm("Clear All Data?") ? setAllData(emptyData) : null;
  }

  function handleDownload() {
    const element = targetRef.current;
    const opt = {
      margin: [0, 0.1, 0.2, 0.1],
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();

    // generatePDF(targetRef, { filename: "resume.pdf" });
  }

  function handleThemeColorChange(e) {
    e.preventDefault();
    setThemeColor(e.target.value);
    targetRef.current.style.setProperty("--theme-color", themeColor);
  }

  return (
    <>
      <header>
        <h1>
          <FilePen size={30} />
          Resume Builder
        </h1>
      </header>
      <main className="container">
        <InputSection allData={allData} setAllData={setAllData} />
        <PreviewSection
          personalDetails={allData.personalDetails}
          education={allData.education}
          experience={allData.experience}
          targetRef={targetRef}
          themeColor={themeColor}
        />
        <OptionsSection
          handleLoadExample={handleLoadExample}
          handleClear={handleClear}
          handleDownload={handleDownload}
          themeColor={themeColor}
          handleColorChange={handleThemeColorChange}
        />
      </main>
    </>
  );
}

export default App;
