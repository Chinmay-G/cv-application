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
      <button id="load" onClick={handleLoadExample}>
        <ScrollText /> Load Example
      </button>

      <button id="clear" onClick={handleClear}>
        <Trash2 /> Clear
      </button>

      <button id="download" onClick={handleDownload}>
        <Download /> Download
      </button>

      <div className="themeColor">
        <label for="#input-color">Theme color :</label>
        <input
          type="color"
          name="colorPicker"
          id="input-color"
          value={themeColor}
          onChange={handleColorChange}
        />
      </div>
    </section>
  );
}
