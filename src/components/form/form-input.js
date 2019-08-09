import React from 'react';

export default class FormInput extends React.Component {
    render() {
        return (
            <div className={`field ${this.props.isValid ? '' : 'error'}`}>
                <label>{this.props.label}</label>
                <input
                    type='text'
                    value={this.props.value}
                    onChange={e => this.props.onChange(e.target.value)}
                    placeholder={this.props.placeholder}
                />
            </div>        
        )
    }
}