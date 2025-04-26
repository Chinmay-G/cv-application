import { useState } from "react";
import {} from "lucide-react";
import InputDivisionHeading from "./InputDivisionHeading";
import EducationForm from "./EducationForm";

export default function InputEducation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="input-division education">
      <InputDivisionHeading isOpen={isOpen} setIsOpen={setIsOpen}>
        Education
      </InputDivisionHeading>
      {isOpen && (
        <>
          <hr />
          <EducationForm />
          <button className="add-mini-form-button">+ Education</button>
        </>
      )}
    </div>
  );
}
