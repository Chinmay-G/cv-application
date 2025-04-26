import { useState } from "react";
import InputDivisionHeading from "./InputDivisionHeading";
import ExperienceForm from "./ExperienceForm";

export default function InputExperience() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="input-division experience">
      <InputDivisionHeading isOpen={isOpen} setIsOpen={setIsOpen}>
        Experience
      </InputDivisionHeading>
      {isOpen && (
        <>
          <hr />
          <ExperienceForm />
          <button className="add-mini-form-button">+ Experience</button>
        </>
      )}
    </div>
  );
}
