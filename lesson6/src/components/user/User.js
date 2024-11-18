import React from 'react';
import classes from "./User.module.scss";

const User = ({user, fetchUserOne, userOne}) => {
    return (
        <div className={classes.user} key={user.id}>
            <div>user: {user.name}</div>
            <div>username: {user.username}</div>
            <button onClick={()=> fetchUserOne('users', user.id)}>подробнее</button>
            ==============================================
            {
                userOne.id === user.id && <>
                    <div>company name: {userOne?.name}</div>
                    <div>company city: {userOne?.city}</div>
                </>
            }
        </div>
    );
};

export default User;