export default function ExperienceForm() {
  return (
    <form>
      <h3>Designation</h3>
      <div>
        <label>Job Title</label>
        <input type="text" placeholder="Jr. Developer | CEO | Teacher" />
      </div>
      <div>
        <label>Company</label>
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
      <div>
        <label>Description</label>
        <textarea rows="3" />
      </div>
      <div className="mini-form-buttons">
        <button className="delete-button">🗑️ Delete</button>
        <button className="save-button">✔️ Save</button>
        <button className="close-button">❌ Close</button>
      </div>
    </form>
  );
}
