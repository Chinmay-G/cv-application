import { useState } from "react";
import "../styles/InputSection.css";

export default function InputSection() {
  return (
    <section className="input-section">
      <InputPersonalDetails />

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

function InputPersonalDetails() {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    photo: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setPersonalDetails((details) => ({ ...details, [name]: value }));
  }

  return (
    <div className="input-division personal-details">
      <div
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => setIsOpen((cur) => !cur)}
      >
        <h2>
          👤 Personal Details
          <span>{isOpen ? "🔺" : "🔻"}</span>
        </h2>
        {/* <div>⬇</div> */}
        <hr />
      </div>
      {isOpen && (
        <>
          <div className="input-name">
            <label>Full Name</label>
            <input
              id="name"
              type="text"
              value={personalDetails.name}
              onChange={(e) =>
                setPersonalDetails((details) => ({
                  ...details,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="input-photo">
            <label>Photo</label>
            <label for="file-upload" class="custom-file-upload">
              📸 Upload
            </label>
            <input
              id="file-upload"
              accept="image/*"
              type="file"
              name="photo"
              onChange={(e) =>
                setPersonalDetails((details) => ({
                  ...details,
                  photo: e.target.files[0],
                }))
              }
            />
          </div>
          <div className="input-email">
            <label>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={personalDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className="input-phone">
            <label>Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={personalDetails.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={personalDetails.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Summary</label>
            <textarea
              rows="3"
              name="summary"
              value={personalDetails.summary}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
}
