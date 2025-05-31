import "../styles/PreviewSection.css";

export default function PreviewSection({
  personalDetails,
  education,
  experience,
  targetRef,
}) {
  return (
    <section className="preview-section">
      <div className="preview-container" ref={targetRef}>
        <div className="preview-personal">
          {personalDetails.photo && (
            <img
              src={
                typeof personalDetails.photo === "string"
                  ? personalDetails.photo
                  : URL.createObjectURL(personalDetails.photo)
              }
            />
          )}
          <div>
            <h1>{personalDetails.name ? personalDetails.name : "Your Name"}</h1>
            <p>
              {personalDetails.email} {personalDetails.phone && "|"}
              {"  "}
              {personalDetails.phone} {personalDetails.address && "|"}
              {"  "}
              {personalDetails.address}
            </p>
          </div>
        </div>

        <hr />

        {personalDetails.summary && (
          <div className="summary">
            <h2>Summary</h2>
            <hr />
            <p>{personalDetails.summary}</p>
          </div>
        )}

        {education.length > 0 &&
          !education.every((edu) => edu.visible === false) && (
            <div>
              <h2>Education</h2>
              <hr />

              {education.map(
                (_, i) =>
                  education[i].visible && (
                    <div key={education[i].key}>
                      <h3>
                        {education[i].degree} {education[i].school && "@"}{" "}
                        {education[i].school}
                      </h3>
                      <p>
                        {education[i].startDate} {education[i].endDate && "-"}{" "}
                        {education[i].endDate}
                      </p>
                      <p>{education[i].location}</p>
                    </div>
                  )
              )}
            </div>
          )}

        {experience.length > 0 &&
          !experience.every((exp) => exp.visible === false) && (
            <div>
              <h2>Experience</h2>
              <hr />

              {experience.map(
                (_, i) =>
                  experience[i].visible && (
                    <div key={experience[i].key}>
                      <h3>
                        {experience[i].jobTitle} {experience[i].company && "@"}{" "}
                        {experience[i].company}
                      </h3>
                      <p>
                        {experience[i].startDate} {experience[i].endDate && "-"}{" "}
                        {experience[i].endDate}
                      </p>
                      <p>{experience[i].location}</p>
                      <p>{experience[i].description}</p>
                    </div>
                  )
              )}
            </div>
          )}
      </div>
    </section>
  );
}
