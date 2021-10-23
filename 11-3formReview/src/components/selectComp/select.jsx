import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (<div>
            <label htmlFor="age">{this.props.labelText}:</label>
            <select required={true} style={{ marginTop: '1.2rem' }} onChange={(e)=>this.props.onInputChange(e,this.props.labelText)}>
                <option value='0-15'>0-15</option>
                <option value='16-45'>16-45</option>
                <option value='46-100'>46-100</option>
            </select>
        </div>);
    }
}

export default Select;

