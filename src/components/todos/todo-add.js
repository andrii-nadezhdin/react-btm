import React from 'react';

export default class TodoAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: ''
        }
    }

    onAddClick = () => {
        const {title, text} = this.state;
        this.props.onAddClick(title, text)
        this.setState({
            title:'',
            text:''
        })
    }

    render() {
        return (
            <div class="ui container segment ui form">
                <div className="ui header">Add new item</div>
                <div className="field">
                    <label>Title</label>
                    <input
                        type='text'
                        value={this.state.title}
                        onChange={e => this.setState({title: e.target.value})}
                        placeholder="Title"
                    />
                </div>
                <div className="field">
                    <label>Text</label>
                    <input
                        type='text'
                        value={this.state.text}
                        onChange={e => this.setState({text: e.target.value})}
                        placeholder="Text"
                    />
                </div>
                <button onClick={this.onAddClick} className="ui primary button">Add #{this.props.newItemNumber}</button>
            </div>
        );
    }
}