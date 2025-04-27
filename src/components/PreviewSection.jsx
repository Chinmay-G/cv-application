import "../styles/PreviewSection.css";

export default function PreviewSection({
  personalDetails,
  education,
  experience,
}) {
  return (
    <section className="preview-section">
      <div className="preview-container">
        <div className="preview-personal blue">
          {personalDetails.photo && (
            <img
              src={
                typeof personalDetails.photo === "string"
                  ? personalDetails.photo
                  : URL.createObjectURL(personalDetails.photo)
              }
            />
          )}
          <h1>{personalDetails.name}</h1>
          <p>
            {personalDetails.email} {personalDetails.phone && "|"}
            {"  "}
            {personalDetails.phone} {personalDetails.address && "|"}
            {"  "}
            {personalDetails.address}
          </p>
        </div>

        <hr />

        {personalDetails.summary && (
          <div>
            <h2>Summary</h2>
            <p>{personalDetails.summary}</p>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h2>Education</h2>

            <div>
              <h3>{education[0].degree}</h3>
              <p>2021 - 2025</p>
              <p>Bangalore</p>
            </div>

            <div>
              <h3>Pre-University @ RNS Institute of Technology</h3>
              <p>2019 - 2021</p>
              <p>Bangalore</p>
            </div>
          </div>
        )}

        <div>
          <h2>Experience</h2>

          <div>
            <h3>Jr. Software Developer @ ABC Tech.</h3>
            <p>2024 - Present</p>
            <p>Remote</p>
            <p>Works on scalable React applications and integrated APIs.</p>
          </div>

          <div>
            <h3>Freelance Developer @ Random</h3>
            <p>2023 - 2024</p>
            <p>Bangalore</p>
            <p>Works on scalable React applications and integrated APIs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
