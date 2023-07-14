import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
function PracticeHooks() {
  const [hookValue, sethookValue] = useState("True");
  return (
    <>
      <h3> PracticeHooks (useState)</h3>
      <div>
        <p> Start </p>
        <input
          type="text"
          value={hookValue}
          onChange={(e) => {
            sethookValue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            if (hookValue === "True") {
              sethookValue("False");
            } else {
              sethookValue("True");
            }
          }}
        >
          Submit
        </button>
        <p> {hookValue}</p>
      </div>
    </>
  );
}

export default PracticeHooks;
