import React from 'reactn';
import FormInput from '../form/form-input';
import FormButton from '../form/form-button';
import Form from '../form/form';
import { newGuid } from '../../utils/guid';


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
            this.setGlobal({
                todos: [
                    ...this.global.todos,
                    {
                        id: newGuid(),
                        title,
                        text
                    }
                ]
            });
        }
    }

    render() {
        return (
            <Form title='Add new item'>
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
                <FormButton submitText={`Add #${this.global.todos.length + 1}`} onClick={this.onAddClick} />
            </Form>
        );
    }
};