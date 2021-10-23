import React from 'react';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <label htmlFor="textAreaLabel">{this.props.labelText}:</label>
            <textarea required={true} style={{ marginTop: '1.2rem' }} id="textarea" name="textArea" rows="4" cols="20" onChange={(e) => this.props.onInputChange(e,this.props.labelText)} value={this.props.freeText}>
            </textarea>
        </div>);
    }
}

export default TextArea;

