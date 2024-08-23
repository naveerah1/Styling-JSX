import React from "react";
import React from "react-dom/client";
import App from "./App";
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
