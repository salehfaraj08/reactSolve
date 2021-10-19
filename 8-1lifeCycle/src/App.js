import React from "react";
import LifeCycle from "./components/lifeCycle/life";



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <LifeCycle />
      </div >
    );
  }
}

export default App;
