import React from 'react';
import FormInput from '../form/form-input';
import FormButton from '../form/form-button';
import Form from '../form/form';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';


@observer
class TodoAdd extends React.Component {
    
    @observable
    values = {
        title:'',
        isTitleValid: true,
        text:'',
        isTextValid: true
    }

    @action
    onAddClick = () => {
        const {title, text} = this.values;
        this.values = {
            title:'',
            isTitleValid: !!title,
            text:'',
            isTextValid: !!text
        };
        if (!!title && !!text) {
            this.props.todoStore.addTodo(title, text);
        }
    }

    @action
    onTitleChange = (value) => this.values.title = value;

    @action
    onTextChange = (value) => this.values.text = value;

    render() {
        return (
            <Form title='Add new item'>
                <FormInput
                    label='Title'
                    value={this.values.title}
                    onChange={this.onTitleChange}
                    placeholder="Title"
                    isValid={this.values.isTitleValid}
                />
                <FormInput
                    label='Text'
                    value={this.values.text}
                    onChange={this.onTextChange}
                    placeholder="Text"
                    isValid={this.values.isTextValid}
                />
                <FormButton submitText={`Add #${this.props.todoStore.todosCount + 1}`} onClick={this.onAddClick} />
            </Form>
        );
    }
};

export default TodoAdd;