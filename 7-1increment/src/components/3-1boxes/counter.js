import React from "react";


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ value: this.state.value + 1 })
    }
    render() {
        return (<div className="box1">
            <input className='incBtn' type='button' value='increment' onClick={this.handleClick} />
            <label htmlFor='value' style={{ marginLeft: '5px' }}>{this.state.value}</label>
        </div>);
    }

}

export default Counter;