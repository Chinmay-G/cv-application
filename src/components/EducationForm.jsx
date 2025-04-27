export default function EducationForm({ education, handleChange, index }) {
  function onChange(e) {
    handleChange(e, index);
  }

  return (
    <form>
      <h3>{education.degree ? education.degree : "Designation"}</h3>
      <div>
        <label>Degree</label>
        <input
          type="text"
          name="degree"
          value={education.degree}
          onChange={onChange}
        />
      </div>
      <div>
        <label>School</label>
        <input
          type="text"
          name="school"
          value={education.school}
          onChange={onChange}
        />
      </div>
      <div className="input-date">
        <label>Start Date</label>
        <input
          type="text"
          name="startDate"
          value={education.startDate}
          onChange={onChange}
        />
      </div>
      <div className="input-date">
        <label>End Date</label>
        <input
          type="text"
          name="endDate"
          value={education.endDate}
          onChange={onChange}
        />
      </div>
      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          value={education.location}
          onChange={onChange}
        />
      </div>
      <div className="mini-form-buttons">
        <button className="delete-button">🗑️ Delete</button>
        <button className="save-button">✔️ Save</button>
        <button className="close-button">❌ Close</button>
      </div>
    </form>
  );
}
