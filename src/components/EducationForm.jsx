import { ChevronsDown, ChevronsUp, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import MiniFormButtons from "./MiniFormButtons";

export default function EducationForm({
  education,
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
            {education.degree ? education.degree : "Untitled Designation"}
          </h3>
          <span>
            {isOpen ? <ChevronsUp size={18} /> : <ChevronsDown size={18} />}
          </span>
        </div>

        <span value={education.visible} onClick={() => handleVisibility(index)}>
          {education.visible ? <Eye /> : <EyeOff />}
        </span>
      </div>

      {isOpen && (
        <>
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
