import React from "react";
import './user.css';

const User = (props) => {
    return (
        <div className="user-card">
            <p className="user-card__text">Name: {props.name}</p>
            <p className="user-card__text">Status: {props.status}</p>
            <p className="user-card__text">E-Mail: {props.email}</p>
            <p className="user-card__text">Post-Created: {props.postCount}</p>
        </div>
    )
}

export default User;