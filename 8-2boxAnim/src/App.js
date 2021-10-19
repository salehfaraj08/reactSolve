import React from "react";
import BoxAnim from "./components/boxAnim/box";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(1);
      this.setState({ time: 1 })
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.time === 1) {
      setTimeout(() => {
        console.log(4);
        this.setState({ time: 2 })
      }, 4000);
    }

  }

  render() {
    return (
      <div className="App">
        {this.state.time === 1 ? <div style={{ display: "flex", flexDirection: 'column', gap: '1vh' }}>
          <BoxAnim width='200px' height='100px' />
          <BoxAnim width='300px' height='150px' />
          <BoxAnim width='160px' height='110px' />
        </div> : <div></div>
        }
      </div >
    );
  }
}

export default App;
