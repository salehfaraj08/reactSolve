import React from "react";


class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red' };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'green' })
        }, 1000);
    }

    componentDidUpdate() {
        document.querySelector('#div1').
        textContent = `The updated favorite color is ${this.state.favoriteColor}`
    }

    render() {
        return <div><h1>My favorite color is {this.state.favoriteColor}</h1>
            <div id='div1'></div>
        </div>
    }

}

export default LifeCycle;