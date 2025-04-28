import "../styles/OptionsSection.css";
import { ScrollText, Trash2, Download } from "lucide-react";

export default function OptionsSection({
  handleLoadExample,
  handleClear,
  handleDownload,
  themeColor,
  handleColorChange,
}) {
  return (
    <section className="options-section">
      <button onClick={handleLoadExample}>
        <ScrollText /> Load Example
      </button>

      <button onClick={handleClear}>
        <Trash2 /> Clear
      </button>

      <button onClick={handleDownload}>
        <Download /> Download
      </button>

      <div className="themeColor"></div>
      <input
        type="color"
        name="colorPicker"
        id="input-color"
        value={themeColor}
        onChange={handleColorChange}
      />
    </section>
  );
}
