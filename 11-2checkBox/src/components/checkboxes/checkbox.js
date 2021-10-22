import './style.css';
import React from 'react';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: false }
    }
    componentDidMount() {
        this.setState({ isChecked: this.props.isChecked })
    }

    changeChecked() {
        console.log(this.state.isChecked);
        this.setState({
            isChecked: !this.state.isChecked
        })
    }
    render() {
        return (<div>
            <input type='checkbox' readOnly={true} checked={this.state.isChecked} onClick={() => this.changeChecked()} />
            <label>{this.props.text}</label>
        </div>);
    }
}

export default CheckBox;

