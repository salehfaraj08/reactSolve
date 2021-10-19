import React from "react";
import Joke from "./components/jokes/joke";



class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <Joke/>
  }
}

export default App;
