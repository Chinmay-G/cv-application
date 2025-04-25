import "../styles/InputSection.css";

export default function InputSection() {
  return (
    <section className="input-section">
      <div>
        <div className="personal-details">
          <h2>Personal Details</h2>
          <div>⬇</div>
          <hr />
          <div>
            <label>Full Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Photo</label>
            <input type="file" accept="image/*" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" />
          </div>
          <div>
            <label>Summary</label>
            <textarea rows="3" />
          </div>
        </div>

        <div className="education">
          <h2>Education</h2>
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
            <div>
              <label>Start Date</label>
              <input type="text" />
            </div>
            <div>
              <label>End Date</label>
              <input type="text" />
            </div>
            <div>
              <label>Location</label>
              <input type="text" />
            </div>
          </form>
          <button>+ Education</button>
        </div>

        <div className="experience">
          <h3>Designation</h3>
          <form>
            <div>
              <label>Job Title</label>
              <input type="text" placeholder="Jr. Developer | CEO | Teacher" />
            </div>
            <div>
              <label>Company</label>
              <input type="text" />
            </div>
            <div>
              <label>Start Date</label>
              <input type="text" />
            </div>
            <div>
              <label>End Date</label>
              <input type="text" />
            </div>
            <div>
              <label>Location</label>
              <input type="text" />
            </div>
            <div>
              <label>Description</label>
              <textarea></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
