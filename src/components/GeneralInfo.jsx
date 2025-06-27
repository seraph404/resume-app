function GeneralInfo({ fullName, email, phone, setInfo, setShowOutput }) {
  function setGeneralInfo(event) {
    const { name, value } = event.target;

    setInfo((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  function handleSubmit() {
    setShowOutput((previousState) => ({
      ...previousState,
      generalInfo: true,
    }));
  }

  return (
    <div>
      <fieldset>
        <legend>General information</legend>
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
          <input type="submit" value="Update" onClick={handleSubmit}></input>
        </div>
      </fieldset>
    </div>
  );
}

export default GeneralInfo;
