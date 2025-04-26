import { useState } from "react";
import {} from "lucide-react";
import InputDivisionHeading from "./InputDivisionHeading";
import EducationForm from "./EducationForm";

export default function InputEducation() {
  const [isOpen, setIsOpen] = useState(false);
  const [numForms, setNumForms] = useState(0);
  const arr = new Array(numForms).fill(null);

  return (
    <div className="input-division education">
      <InputDivisionHeading isOpen={isOpen} setIsOpen={setIsOpen}>
        Education
      </InputDivisionHeading>
      {isOpen && (
        <>
          <hr />
          {arr.map((_, i) => (
            <EducationForm index={i} />
          ))}
          {/* <EducationForm /> */}
          <button
            className="add-mini-form-button"
            onClick={() => setNumForms((numForms) => numForms + 1)}
          >
            + Education
          </button>
        </>
      )}
    </div>
  );
}
