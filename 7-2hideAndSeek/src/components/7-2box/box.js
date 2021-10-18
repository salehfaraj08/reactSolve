import React from "react";


class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShow: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (this.state.isShow === true) {
            this.setState({ isShow: false })
            let box = document.querySelector('.innerbox');
            box.style.display = 'none';
        }
        else {
            this.setState({ isShow: true })
            let box = document.querySelector('.innerbox');
            box.style.display = 'block';
        }

    }
    render() {
        return (<div className="box1" style={{
            margin: '10vw 0 0 45%', display: 'flex', flexDirection: 'column',
            width: '15vw', height: '40vh', border: '1px solid black', alignItems: "center"
        }}>
            <input className='incBtn' type='button' value='show/hide' onClick={this.handleClick} style={{ marginTop: '5px', width: '10vw' }} />
            <div className='innerbox' style={{ marginTop: '3vh', background: 'yellow', width: '11vw', height: '20vh' }}></div>
        </div>);
    }

}

export default Box;