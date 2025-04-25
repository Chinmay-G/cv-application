import "../styles/InputSection.css";

export default function InputSection() {
  return (
    <section className="input-section">
      <div className="input-division personal-details">
        <div style={{ width: "100%" }}>
          <h2>
            👤 Personal Details<button>🔽</button>
          </h2>
          {/* <div>⬇</div> */}
          <hr />
        </div>
        <div className="input-name">
          <label>Full Name</label>
          <input id="name" type="text" />
        </div>
        <div className="input-photo">
          <label>Photo</label>
          <label for="file-upload" class="custom-file-upload">
            📸 Upload
          </label>
          <input id="file-upload" accept="image/*" type="file" name="photo" />
        </div>
        <div className="input-email">
          <label>Email</label>
          <input id="email" type="email" />
        </div>
        <div className="input-phone">
          <label>Phone</label>
          <input id="phone" type="text" />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" />
        </div>
        <div>
          <label>Summary</label>
          <textarea rows="3" />
        </div>
      </div>

      <div className="input-division education">
        <div>
          <h2>Education</h2>

          <hr />
        </div>
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
        <button className="add-mini-form-button">+ Education</button>
      </div>

      <div className="input-division experience">
        <div>
          <h2>Experience</h2>
          <hr />
        </div>
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
        <button className="add-mini-form-button">+ Experience</button>
      </div>
    </section>
  );
}
