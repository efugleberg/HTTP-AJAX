import React from 'react';
import './Friend.css'

const Friend = props => {
    return (
        <div className="friend-display">
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>

    );
}

export default Friend;