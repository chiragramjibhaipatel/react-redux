import React from "react";
import { render } from "react-dom";



function Hi() {
  return <div>hello from react</div>;
}

render(<Hi />, document.getElementById("app"));
