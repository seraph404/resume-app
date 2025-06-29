import { useState } from "react";

function ContactInfo({ email, phone, website, setContactInfo, isEditing }) {
  function handleContactChange(event) {
    const { name, value } = event.target;

    setContactInfo((previousState) => ({
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
          <fieldset>
            <legend>Contact info</legend>
            <div>
              <label>Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleContactChange}
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
                onChange={handleContactChange}
                maxLength="10"
                required
              />
            </div>
            <div>
              <label>Website</label>
              <br />
              <input
                type="url"
                name="website"
                value={website}
                onChange={handleContactChange}
              />
            </div>
          </fieldset>
        </>
      ) : (
        <>
          {" "}
          <div className="contact-info section">
            <h2>Contact</h2>
            <p>
              <strong>Email</strong>
              <br />
              {email}
            </p>

            <p>
              <strong>Phone</strong>
              <br />
              {formatPhoneNumber(phone)}
            </p>
            <p>
              <strong>Website</strong>
              <br />
              {website}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default ContactInfo;
