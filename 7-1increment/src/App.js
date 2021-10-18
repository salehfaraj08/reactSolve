import React from "react";
import Counter from "./components/3-1boxes/counter";



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Counter />
      </div >
    );
  }
}

export default App;
