import React, { useState } from "react";
import "./App.css";

function App() {
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentValue = e.target.value;
    const isValidZipRegEx = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (isValidZipRegEx.test(currentValue)) {
      setShowSuccess(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowSuccess(false);
    }
  };
  
  return (
    <div
      className="App">
      <form>
        <input
          onChange={(e: any) => handleChange(e)}
          placeholder="Enter Your ZipCode Here...."
          type="number"
          style={{ width: "400px", height: "45px", fontSize: "30px" }}
          name="zipCode"
          autoComplete="on"
          autoFocus
        />
      </form>
      <div>
        {showError && (
          <p style={{ color: "red" }}>Please Enter a valid zip code</p>
        )}
        {showSuccess && (
          <p style={{ color: "green" }}>You have entered a valid zip code</p>
        )}
      </div>
    </div>
  );
}

export default App;
