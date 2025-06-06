import InputPersonalDetails from "./InputPersonalDetails";
import InputEducation from "./InputEducation";
import InputExperience from "./InputExperience";
import "../styles/InputSection.css";

export default function InputSection({ allData, setAllData }) {
  function handlePersonalDetailsChange(e) {
    const { name, value } = e.target;
    setAllData((allData) => ({
      ...allData,
      personalDetails: { ...allData.personalDetails, [name]: value },
    }));
  }

  function handlePhotoChange(e) {
    const file = e.target.files[0];
    setAllData((allData) => ({
      ...allData,
      personalDetails: { ...allData.personalDetails, photo: file },
    }));
  }

  function setEducation(educationData) {
    setAllData((allData) => ({ ...allData, education: educationData }));
  }

  function setExperience(experienceData) {
    setAllData((allData) => ({ ...allData, experience: experienceData }));
  }

  return (
    <section className="input-section">
      <InputPersonalDetails
        personalDetails={allData.personalDetails}
        handleChange={handlePersonalDetailsChange}
        handlePhotoChange={handlePhotoChange}
      />
      <InputEducation
        education={allData.education}
        setEducation={setEducation}
      />
      <InputExperience
        experience={allData.experience}
        setExperience={setExperience}
      />
    </section>
  );
}
