import { useState } from "react";

function GeneralInfo({ fullName, email, phone, setInfo }) {
  const [isEditing, setIsEditing] = useState(true);

  function setGeneralInfo(event) {
    const { name, value } = event.target;

    setInfo((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function formatPhoneNumber(phone) {
    if (phone.length != 10) return phone;
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
  }

  return (
    <div>
      {isEditing ? (
        <>
          <h2>General Info</h2>
          <div>
            <label>Full name:</label>{" "}
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={setGeneralInfo}
              required
            />
          </div>
          <div>
            <label>Email:</label>{" "}
            <input
              type="email"
              name="email"
              value={email}
              onChange={setGeneralInfo}
              required
            />
          </div>
          <div>
            <label>Phone:</label>{" "}
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={setGeneralInfo}
              maxLength="10"
              required
            />
          </div>
          <div>
            <input type="submit" value="Update" onClick={handleSubmit} />
          </div>
        </>
      ) : (
        <>
          <h2>{fullName}</h2>
          <p>{email}</p>
          <p>{formatPhoneNumber(phone)}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
