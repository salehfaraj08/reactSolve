import React from "react";
import AllAvatars from "./allAvatars";
import Input from "./input";
const url = 'https://randomuser.me/api/?results=10'
class GetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatars: []
        }
    }
    componentDidMount = async () => {
        try {
            let data = await (await fetch(url)).json();
            this.setState({
                avatars: [...this.state.avatars, data.results.map(person => {
                    return { cell: person.cell, Name: `${person.name.first} ${person.name.first}`, urlPic: person.picture.medium };
                })]
            })
            this.setState({ avatars: this.state.avatars[0] })
        } catch (err) {
            console.log(err);
        }
    }
    handleChange = (event) => {
        console.log(event.target.value);
        let filterdData = this.state.avatars.filter(person => person.Name.includes(event.target.value))
        console.log(filterdData);
        if (filterdData.length) {
            this.setState({
                avatars: filterdData
            })
            console.log('filtered',this.state.avatars);
        }
        
    }

    render() {
        return (<>
            <div className='input-container'>
                <Input handleChange={this.handleChange} />
            </div>
            <AllAvatars persons={this.state.avatars} />
        </>);
    }
}

export default GetData;