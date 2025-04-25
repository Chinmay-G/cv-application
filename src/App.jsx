import "./App.css";
import InputSection from "./components/InputSection";
import PreviewSection from "./components/PreviewSection";
import OptionsSection from "./components/OptionsSection";

function App() {
  return (
    <>
      <header>
        <h1>Resume Generator</h1>
      </header>
      <main className="container">
        <InputSection />
        <PreviewSection />
        <OptionsSection />
      </main>
    </>
  );
}

export default App;
