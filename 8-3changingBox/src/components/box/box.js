import React from "react";
import './box.css';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['green', 'purple', 'yellow', 'black', 'blue'],
            background: '',
            changeNum: 0
        };
    }

    componentDidMount() {
        this.setState({ background: this.state.colors[this.state.changeNum] });
        this.setState({ changeNum: this.state.changeNum + 1 });
    }

    componentDidUpdate() {
        if (this.state.changeNum < 5) {
            console.log('update', this.state.background, this.state.changeNum);
            setTimeout(() => {
                this.setState({ background: this.state.colors[this.state.changeNum] })
                this.setState({ changeNum: this.state.changeNum + 1 })
            }, 500);
        }
    }

    render() {
        if (this.state.changeNum < 5) {
            return <div style={{ width: this.props.width, height: this.props.height, background: this.state.background }}></div>
        }
        else {
            return <div style={{ width: this.props.width, height: this.props.height, background: this.state.colors[this.state.colors.length-1], borderRadius: '50%' }}></div>
        }
    }
}

export default Box;