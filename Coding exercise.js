import React from "react";

function App() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        spellCheck
        style={{ backgroundColor: "brown" }}
      />
    </div>
  );
}

export default App;
