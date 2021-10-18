import React from "react";
import Box1 from "./components/3-1boxes/box1";



class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
        <Box1/>
      </div >
    );
  }
}

export default App;
