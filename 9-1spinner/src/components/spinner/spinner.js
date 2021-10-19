import React from "react";
import './style.css';

class Spinner extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return <div className='container'>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
            Loading....
        </div>
    }
}

export default Spinner;