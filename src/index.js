import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import StartFile from "./StartFile";
import "./styles.css";

// import StartFileCopy from "./StartFileCopy";
// import "./stylesCopy.css"
 {/* uncomment to see ex 5 optional and original style */}

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StartFile />
        {/* <StartFileCopy />  */}
        {/* uncomment to see ex 5 optional  */}
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

