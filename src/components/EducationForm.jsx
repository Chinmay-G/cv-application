export default function EducationForm() {
  return (
    <form>
      <h3>BE Computer Science & Engineering</h3>
      <div>
        <label>Degree</label>
        <input type="text" />
      </div>
      <div>
        <label>School</label>
        <input type="text" />
      </div>
      <div className="input-date">
        <label>Start Date</label>
        <input type="text" />
      </div>
      <div className="input-date">
        <label>End Date</label>
        <input type="text" />
      </div>
      <div>
        <label>Location</label>
        <input type="text" />
      </div>
      <div className="mini-form-buttons">
        <button className="delete-button">🗑️ Delete</button>
        <button className="save-button">✔️ Save</button>
        <button className="close-button">❌ Close</button>
      </div>
    </form>
  );
}
