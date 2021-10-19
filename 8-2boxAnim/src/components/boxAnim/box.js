import React from "react";
import './box.css';

class BoxAnim extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div className='box' style={{ width: this.props.width, height: this.props.height }}></div>
    }
}

export default BoxAnim;