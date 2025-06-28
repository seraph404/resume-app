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

  return (
    <div>
      {isEditing ? (
        <>
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
          <h1>{fullName}</h1>
          <p>{email}</p>
          <p>{phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default GeneralInfo;
