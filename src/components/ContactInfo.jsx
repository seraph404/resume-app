import { useState } from "react";

function ContactInfo({ email, phone, setContactInfo, isEditing }) {
  function setContactInfo(event) {
    const { name, value } = event.target;

    setInfo((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  function formatPhoneNumber(phone) {
    if (phone.length != 10) return phone;
    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
  }

  return (
    <>
      {isEditing ? (
        <>
          <h2>General Info</h2>
          <fieldset>
            <legend>Contact info</legend>
            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={setContactInfo}
                required
              />
            </div>
            <div>
              <label>Phone</label>
              <br />
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={setContactInfo}
                maxLength="10"
                required
              />
            </div>
          </fieldset>
        </>
      ) : (
        <>
          {" "}
          <div className="contact-info section">
            <h2>Contact</h2>
            <p>{email}</p>
            <p>{formatPhoneNumber(phone)}</p>
          </div>
        </>
      )}
    </>
  );
}

export default ContactInfo;
