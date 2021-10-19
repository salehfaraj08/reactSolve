import React from "react";
import './style.css';
class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {}, jokes: '', categoryArr: [], categoryJoke: {} }
    }

    getData = async () => {
        try {
            this.setState({ data: await (await fetch("https://api.chucknorris.io/jokes/random")).json() });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount = async () => {
        this.getData();
        try {
            this.setState({ categoryArr: await (await fetch("https://api.chucknorris.io/jokes/categories")).json() });
            console.log(this.state.categoryArr);
        } catch (err) {
            console.log(err);
        }
    }

    handleClick = () => {
        this.getData();
        this.setState({ jokes: this.state.data.value });
    }

    categoryHandle = async (e) => {
        console.log(e.currentTarget);
        try {
            this.setState({ categoryJoke: await (await fetch(`https://api.chucknorris.io/jokes/random?category=${e.currentTarget.value}`)).json() });
            console.log(this.state.categoryJoke.value);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return <div className='container'>
            <input type='button' value='get joke' onClick={this.handleClick} />
            <div>{this.state.jokes}</div>
            <select onChange={this.categoryHandle}>
                {this.state.categoryArr.map(val => <option value={val}>{val}</option>)}
            </select>
            <div>{this.state.categoryJoke.value}</div>
        </div>
    }
}

export default Joke;