import React from "react";
import Box4 from './box4';
import './boxes.css'

class Box3 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="box3">
            <Box4 />
            <Box4 />
        </div >;
    }
}

export default Box3;