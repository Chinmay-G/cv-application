import {
  UserRound,
  GraduationCap,
  BriefcaseBusiness,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export default function InputDivisionHeading({ isOpen, setIsOpen, children }) {
  return (
    <div
      className="input-division-heading"
      onClick={() => setIsOpen((cur) => !cur)}
    >
      {children.toLowerCase() === "personal details" && (
        <UserRound size={25} style={{ marginRight: "1rem" }} />
      )}
      {children.toLowerCase() === "education" && (
        <GraduationCap size={25} style={{ marginRight: "1rem" }} />
      )}
      {children.toLowerCase() === "experience" && (
        <BriefcaseBusiness size={25} style={{ marginRight: "1rem" }} />
      )}

      <h2>{children}</h2>
      <span>{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
    </div>
  );
}
