import React from 'react';
import FormInput from '../form/form-input';
import Form from '../form/form'

export default class TodoAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            title:'',
            isTitleValid: true,
            text:'',
            isTextValid: true
        }
    }

    onAddClick = () => {
        const {title, text} = this.state;
        this.setState({
            title:'',
            isTitleValid: !!title,
            text:'',
            isTextValid: !!text
        });
        if (!!title && !!text) {
            this.props.onAddClick(title, text);
        }
    }

    render() {
        return (
            <Form title='Add new item' submitText={`Add #${this.props.newItemNumber}`} onClick={this.onAddClick}>
                <FormInput
                    label='Title'
                    value={this.state.title}
                    onChange={v => this.setState({title: v, isTitleValid: true})}
                    placeholder="Title"
                    isValid={this.state.isTitleValid}
                />
                <FormInput
                    label='Text'
                    value={this.state.text}
                    onChange={v => this.setState({text: v, isTextValid: true})}
                    placeholder="Text"
                    isValid={this.state.isTextValid}
                />
            </Form>
        );
    }
}