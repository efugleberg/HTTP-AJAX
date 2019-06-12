import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        };
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        });
    }


    render() {
        return (
            <div>
                <form>
                    <input
                    type='string'
                    name='name'
                    placeholder='name'
                    value={this.state.friend.name}
                    onChange={this.handleChange}
                    />

                    <input
                    type='number'
                    name='age'
                    placeholder='age'
                    value={this.state.friend.age}
                    onChange={this.handleChange}
                    />

                    <input
                    type='string'
                    name='email'
                    placeholder='email'
                    value={this.state.friend.email}
                    onChange={this.handleChange}
                    />

                    <button> Add Me </button>
                </form>
            </div>
        )
        }
}

export default FriendForm;