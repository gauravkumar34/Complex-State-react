import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  function handleCh(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };

      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value
      //   };
      // }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          onChange={handleCh}
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={handleCh}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
