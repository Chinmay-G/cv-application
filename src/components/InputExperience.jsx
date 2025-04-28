import { useState } from "react";
import InputDivisionHeading from "./InputDivisionHeading";
import ExperienceForm from "./ExperienceForm";

export default function InputExperience({ experience, setExperience }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e, index) {
    const { name, value } = e.target;
    const updatedEdu = [...experience];
    updatedEdu[index][name] = value;
    setExperience(updatedEdu);
  }

  function handleVisibility(index) {
    const updatedEdu = [...experience];
    updatedEdu[index].visible = !updatedEdu[index].visible;
    setExperience(updatedEdu);
  }

  function addNewExperience() {
    setExperience([
      ...experience,
      {
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
        visible: true,
        key: crypto.randomUUID(),
      },
    ]);
  }

  function handleDeleteExperience(index) {
    const updatedEdu = [...experience];
    setExperience(updatedEdu.filter((edu, i) => index !== i));
  }

  return (
    <div className="input-division experience">
      <InputDivisionHeading isOpen={isOpen} setIsOpen={setIsOpen}>
        Experience
      </InputDivisionHeading>
      {isOpen && (
        <>
          <hr />
          {experience.map((_, i) => (
            <ExperienceForm
              key={experience[i].key}
              experience={experience[i]}
              handleChange={handleChange}
              handleVisibility={handleVisibility}
              handleDelete={handleDeleteExperience}
              index={i}
            />
          ))}

          <button className="add-mini-form-button" onClick={addNewExperience}>
            + Experience
          </button>
        </>
      )}
    </div>
  );
}
