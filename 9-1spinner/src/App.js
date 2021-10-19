import React from "react";
import Spinner from "./components/spinner/spinner";



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isShow: true }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isShow: !this.state.isShow })
    }, 4000);
  }

  render() {
    return (
      this.state.isShow ?
        <div className="App">
          <Spinner /> 
        </div >
        :
        <div className="App">
        </div >
    );
  }
}

export default App;
