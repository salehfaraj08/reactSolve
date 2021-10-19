import React from "react";
import Box from "./components/box/box";



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Box width='160px' height='110px'/>
      </div >
    );
  }
}

export default App;
