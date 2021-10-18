import React from "react";
import './boxes.css'
import Box2 from './box2'
class Box1 extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className="box1"><Box2 /></div>;
    }
}

export default Box1;