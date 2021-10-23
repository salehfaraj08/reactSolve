import React from 'react';

class Text extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <label htmlFor="first or last">{this.props.labelText}:</label> <input required={true} style={{ marginTop: '1.2rem' }} type='text' value={this.props.value} onChange={(event) => this.props.onInputChange(event, this.props.labelText)} />
        </div>);
    }
}

export default Text;

