import { useState } from "react";
import { Camera } from "lucide-react";
import InputDivisionHeading from "./InputDivisionHeading";

export default function InputPersonalDetails({
  personalDetails,
  handleChange,
  handlePhotoChange,
}) {
  //   const [personalDetails, setPersonalDetails] = useState({
  //     name: "",
  //     photo: "",
  //     email: "",
  //     phone: "",
  //     address: "",
  //     summary: "",
  //   });

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="input-division personal-details">
      <InputDivisionHeading isOpen={isOpen} setIsOpen={setIsOpen}>
        Personal Details
      </InputDivisionHeading>

      {isOpen && (
        <>
          <hr />
          <div className="input-name">
            <label>Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={personalDetails.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-photo">
            <label>Photo</label>
            <label htmlFor="file-upload" className="custom-file-upload">
              <Camera id="camera" size={20} /> Upload
            </label>
            <input
              id="file-upload"
              accept="image/*"
              type="file"
              name="photo"
              onChange={handlePhotoChange}
            />
          </div>

          <div className="input-email">
            <label>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={personalDetails.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-phone">
            <label>Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={personalDetails.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={personalDetails.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Summary</label>
            <textarea
              rows="3"
              name="summary"
              value={personalDetails.summary}
              onChange={handleChange}
            />
          </div>
        </>
      )}
    </div>
  );
}
