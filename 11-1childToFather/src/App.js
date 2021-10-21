import React from "react";
import Button from "./components/buttons/button";



const colors = ['blue', 'red', 'yellow'];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: '' }
  }

  whichColor = (event) => {
    this.setState({ color: event.target.value });
  }

  render() {
    return <div>
      {colors.map(value => <Button color={value} callBack={this.whichColor} />)}
      <div>The color selected is:{this.state.color}</div>
    </div>
  }
}

export default App;
