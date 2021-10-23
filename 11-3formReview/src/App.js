import React from "react";
import Select from "./components/selectComp/select";
import TextArea from "./components/textAreas/textArea";
import Text from "./components/textsInput/text";
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      firstName: '',
      lastName: '',
      select: '',
      textArea: ''
    }
  }
  componentDidMount() {
    if (localStorage.getItem('textArea'))
      this.setState({ textArea: localStorage.getItem('textArea') });
    else if (localStorage.getItem('select'))
      this.setState({ select: localStorage.getItem('select') });
    else if (localStorage.getItem('firstName'))
      this.setState({ firstName: localStorage.getItem('firstName') });
    else if (localStorage.getItem('lastName'))
      this.setState({ lastName: localStorage.getItem('lastName') });
  }

  componentDidUpdate() {
    localStorage.setItem('textArea', this.state.textArea);
    localStorage.setItem('select', this.state.select);
    localStorage.setItem('firstName', this.state.firstName);
    localStorage.setItem('lastName', this.state.lastName);
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({ display: false })
  }

  handleInputChange = (event, label) => {
    console.log(event.target.value, label);
    if (label === 'First Name') {
      this.setState({ firstName: event.target.value })
    }
    else if (label === 'Last Name') {
      this.setState({ lastName: event.target.value })
    }
    else if (label === 'Age') {
      this.setState({ select: event.target.value })
    }
    else if (label === 'Free text') {
      this.setState({ textArea: event.target.value })
    }
  }

  onBackClicked = () => {
    this.setState({ display: true })
  }


  render() {
    return (<div>
      <form onSubmit={(e) => { this.onSubmit(e) }} className='form' style={{ display: this.state.display === true ? 'block' : 'none' }}>
        <Text value={this.state.firstName} labelText='First Name' onInputChange={this.handleInputChange} />
        <Text className='text' value={this.state.lastName} labelText='Last Name' onInputChange={this.handleInputChange} />
        <Select className='select' labelText='Age' onInputChange={this.handleInputChange} />
        <TextArea className='textArea' freeText={this.state.textArea} labelText='Free text' onInputChange={this.handleInputChange} />
        <input style={{ marginTop: '1.2rem' }} type='submit' value='continue' />
      </form>
      <div style={{ display: this.state.display === false ? 'block' : 'none' }}>
        <p>{this.state.firstName}</p>
        <p>{this.state.lastName}</p>
        <p>{this.state.select}</p>
        <p>{this.state.textArea}</p>
        <input type='button' value='back' onClick={this.onBackClicked} />
        <input type='button' value='submit' onClick={() => {
          localStorage.clear();
          this.setState({ display: '' });
        }} />
      </div>
      <div style={{ display: this.state.display === '' ? 'block' : 'none' }}>
        <p>The data have been sent successfully to the sever </p>
      </div>
    </div>);
  }
}

export default App;

