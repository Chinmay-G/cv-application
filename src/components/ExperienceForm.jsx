import { ChevronsDown, ChevronsUp, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import MiniFormButtons from "./MiniFormButtons";

export default function ExperienceForm({
  experience,
  handleChange,
  handleVisibility,
  handleDelete,
  index,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function onChange(e) {
    handleChange(e, index);
  }

  return (
    <form>
      <div className="form-heading">
        <div onClick={() => setIsOpen((is) => !is)}>
          <h3>
            {experience.degree ? experience.degree : "Untitled Designation"}
          </h3>
          <span>
            {isOpen ? <ChevronsUp size={18} /> : <ChevronsDown size={18} />}
          </span>
        </div>

        <span
          value={experience.visible}
          onClick={() => handleVisibility(index)}
        >
          {experience.visible ? <Eye /> : <EyeOff />}
        </span>
      </div>

      {isOpen && (
        <>
          <div>
            <label>Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={experience.jobTitle}
              onChange={onChange}
              placeholder="Jr. Developer | CEO | Teacher"
            />
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={onChange}
            />
          </div>
          <div className="input-date">
            <label>Start Date</label>
            <input
              type="text"
              name="startDate"
              value={experience.startDate}
              onChange={onChange}
            />
          </div>
          <div className="input-date">
            <label>End Date</label>
            <input
              type="text"
              name="endDate"
              value={experience.endDate}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={experience.location}
              onChange={onChange}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              rows="3"
              name="description"
              value={experience.description}
              onChange={onChange}
            />
          </div>
          <MiniFormButtons
            handleDelete={handleDelete}
            index={index}
            setIsOpen={setIsOpen}
          />
        </>
      )}
    </form>
  );
}
