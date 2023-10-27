import React from "react";
import './users.css';
import { useEffect, useState } from "react";
import User from "./User/user";

const Users = (props) => {
    const [users, setUsers] = useState([]);

    
    useEffect(() => {
        fetch('https://socio-rest.onrender.com/users', {
            method: 'GET'
        })
        .then(result => {
            return result.json();
        })
        .then((resData) => {
            setUsers(resData); 
        })
    }, []);
    let content = <p>Loading...</p>;
    
    if(users.length !== 0) {
        content = users.usersData.map(user => {
            return <User key={user._id} name={user.name} status={user.status} email={user.email} postCount={user.posts.length}></User>
        })
    }
    

    return(
        <div>
            {
                content
            }
        </div>


    );
}

export default Users;