import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            'name': '',
            'email':'',
        }
        this.state = this.initialState;
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    submitForm = () =>{
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name, email} = this.state;

        return (
            <form>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                />

                <label>Email</label>
                <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                />

                <input
                    type='button'
                    value='Submit'
                    onClick={this.submitForm}
                />
            </form>
        );
    }
}

export default Form;