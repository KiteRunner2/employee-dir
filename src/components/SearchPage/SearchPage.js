import React, { useState, useEffect } from 'react';
import TableRow from '../TableRow/TableRow';

function SearchPage() {
    const [userList, setUserList] = useState([]);
    const [showUserList, setNewUserList] = useState([]);

    async function loadUserList() {
        const result = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );

        const users = await result.json();
        // console.log('users is:', users);
        setUserList(users);
        setNewUserList(users);
    }

    useEffect(function() {
        loadUserList();
    }, []);

    function sort(sortParam, order) {
        showUserList.sort(function(firstEl, secondEl) {
            let firstParam = '';
            let secondParam = '';
            if (!sortParam === 'id') {
                firstParam = firstEl[sortParam].toLowerCase();
                secondParam = secondEl[sortParam].toLowerCase();
            } else {
                firstParam = firstEl[sortParam];
                secondParam = secondEl[sortParam];
            }
            if (order === 'asc') {
                if (firstParam > secondParam) {
                    return 1;
                }
                return 0;
            } else {
                if (firstParam < secondParam) {
                    return 1;
                }
                return 0;
            }
        });
        // console.log(userList);
        setNewUserList([...showUserList]);
    }

    function handleInputChange(event) {
        // console.log('handleInputChange called...');
        const searchString = event.target.value.toLowerCase();
        if (!searchString.length) {
            setNewUserList(userList);
        }
        const newUserList = userList.filter(
            user =>
                user.name.toLowerCase().indexOf(searchString) === 0 ||
                user.username.toLowerCase().indexOf(searchString) === 0 ||
                user.email.toLowerCase().indexOf(searchString) === 0 ||
                user.id.toString().indexOf(searchString) === 0
        );
        // console.log(newUserList);
        setNewUserList([...newUserList]);
    }
    return (
        <>
            <form>
                <div className="input-group">
                    <input
                        onChange={e => handleInputChange(e)}
                        type="text"
                        className="form-control"
                        placeholder="Type name, username, email or id to search"
                    />
                </div>
            </form>
            <div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">
                                    #{'     '}
                                    <i
                                        onClick={() => sort('id', 'dsc')}
                                        className="fas fa-arrow-up"
                                    ></i>
                                    {'     '}
                                    <i
                                        onClick={() => sort('id', 'asc')}
                                        className="fas fa-arrow-down"
                                    ></i>
                                </th>
                                <th scope="col">
                                    Name{'     '}
                                    <i
                                        onClick={() => sort('name', 'dsc')}
                                        className="fas fa-arrow-up"
                                    ></i>
                                    {'     '}
                                    <i
                                        onClick={() => sort('name', 'asc')}
                                        className="fas fa-arrow-down"
                                    ></i>
                                </th>
                                <th scope="col">
                                    Username{'     '}
                                    <i
                                        onClick={() => sort('username', 'dsc')}
                                        className="fas fa-arrow-up"
                                    ></i>
                                    {'     '}
                                    <i
                                        onClick={() => sort('username', 'asc')}
                                        className="fas fa-arrow-down"
                                    ></i>
                                </th>
                                <th scope="col">
                                    Email{'     '}
                                    <i
                                        onClick={() => sort('email', 'dsc')}
                                        className="fas fa-arrow-up"
                                    ></i>
                                    {'     '}
                                    <i
                                        onClick={() => sort('email', 'asc')}
                                        className="fas fa-arrow-down"
                                    ></i>
                                </th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showUserList.map(value => (
                                <TableRow
                                    id={value.id}
                                    name={value.name}
                                    username={value.username}
                                    email={value.email}
                                    phone={value.phone}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default SearchPage;
