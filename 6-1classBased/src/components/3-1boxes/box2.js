import React from "react";
import './boxes.css'
import Box3 from './box3'
class Box2 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="box2"><Box3 /></div>;
    }
}

export default Box2;