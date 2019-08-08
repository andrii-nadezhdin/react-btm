import React from 'react';
import FormInput from '../form/form-input';
import FormButton from '../form/form-button';
import Form from '../form/form';
import { connect } from 'react-redux';
import { addTodoItem } from '../../actions';
import { newGuid } from '../../utils/guid';

class TodoAdd extends React.Component {
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
            this.props.addTodoItem({
                id: newGuid(),
                title,
                text
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
                <FormButton submitText={`Add #${this.props.newItemNumber}`} onClick={this.onAddClick} />
            </Form>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        newItemNumber: store.todos.length + 1
    }
}

export default connect(mapStateToProps, { addTodoItem })(TodoAdd);