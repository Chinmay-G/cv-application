import { useState } from "react";
import {} from "lucide-react";
import InputDivisionHeading from "./InputDivisionHeading";
import EducationForm from "./EducationForm";

export default function InputEducation({ education, setEducation }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e, index) {
    const { name, value } = e.target;
    const updatedEdu = [...education];
    updatedEdu[index][name] = value;
    setEducation(updatedEdu);
  }

  function addNewEducation() {
    setEducation([
      ...education,
      {
        degree: "",
        school: "",
        startDate: "",
        endDate: "",
        location: "",
        visible: true,
      },
    ]);
  }

  return (
    <div className="input-division education">
      <InputDivisionHeading isOpen={isOpen} setIsOpen={setIsOpen}>
        Education
      </InputDivisionHeading>
      {isOpen && (
        <>
          <hr />
          {education.map((_, i) => (
            <EducationForm
              key={i}
              education={education[i]}
              handleChange={handleChange}
              index={i}
            />
          ))}

          <button className="add-mini-form-button" onClick={addNewEducation}>
            + Education
          </button>
        </>
      )}
    </div>
  );
}
