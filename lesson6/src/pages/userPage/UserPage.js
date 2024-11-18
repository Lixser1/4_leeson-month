import React, { useEffect, useState } from 'react';
import classes from './UserPage.module.scss';
import User from '../../components/user/User';


const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export const fetchApi = (API) => {
    return fetch(`${BASE_URL}/${API}`).then(response => response.json())
};

const UserPage = () => {
    const [ users, setUsers ] = useState([]);
    const [ users1, setUsers1 ] = useState([]);
    const [ userOne, setUserOne ] = useState({});
    console.log(userOne, '');
    console.log(users, 'users');

    const fetchUsers = async(API) => {
        const response = await fetch(`${BASE_URL}/${API}`);
        return await response.json();
    };
    const fetchUserOne = async(API, id) => {
        const response = await fetch(`${BASE_URL}/${API}/${id}`);
        const data = await response.json();
        setUserOne(data);
    };

    useEffect(() => {
        fetchApi('users').then(data => setUsers(data));
        fetchUsers('users').then(data => setUsers1(data));
    }, []);

    return (
        <div>
            {users.map(user=><div>{user.name}</div>)}
            <div className={classes.users}>
                {users1.map(user =>
                    <User user={user} fetchUserOne={fetchUserOne} userOne={userOne}/>
                )}
            </div>
        </div>
    );
};

export default UserPage;
