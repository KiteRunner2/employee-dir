import React, { useState, useEffect } from 'react';
// import Table from '../Table/Table';
// import EmployeeSearchForm from '../EmployeeSearchForm/EmployeeSearchForm';
import users from '../../db';
import TableRow from '../TableRow/TableRow';

function SearchPage() {
    const [searchInput, setSearchInput] = useState('');
    const [userList, setUserList] = useState([]);
    const [showUserList, setNewUserList] = useState([]);

    useEffect(function() {
        setUserList(users);
        setNewUserList(users);
    }, []);

    function sort(param, order) {
        console.log(`sort function called`);

        const sortParam = param.toLowerCase();
        console.log('clicked!', sortParam);
        showUserList.sort(function(firstEl, secondEl) {
            const firstParam = firstEl[sortParam].toLowerCase();
            const secondParam = secondEl[sortParam].toLowerCase();
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
        console.log('handleInputChange called...');
        const searchString = event.target.value.toLowerCase();
        if (!searchString.length) {
            setNewUserList(userList);
        }
        const newUserList = userList.filter(
            user =>
                user.name.toLowerCase().indexOf(searchString) === 0 ||
                user.username.toLowerCase().indexOf(searchString) === 0 ||
                user.email.toLowerCase().indexOf(searchString) === 0
        );
        console.log(newUserList);
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
                        placeholder="Type name, username or email to search"
                    />
                    {/* <div className="input-group-append">
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                        >
                            Search
                        </button>
                    </div> */}
                </div>
            </form>
            <div>
                {/* <div className="container"> */}
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">
                                    #{'     '}
                                    <i
                                        onClick={() => sort('id', 'dsc')}
                                        class="fas fa-arrow-up"
                                    ></i>
                                    {'     '}
                                    <i
                                        onClick={() => sort('id', 'asc')}
                                        class="fas fa-arrow-down"
                                    ></i>
                                </th>
                                <th scope="col">
                                    Name{'     '}
                                    <i
                                        onClick={() => sort('name', 'dsc')}
                                        class="fas fa-arrow-up"
                                    ></i>
                                    {'     '}
                                    <i
                                        onClick={() => sort('name', 'asc')}
                                        class="fas fa-arrow-down"
                                    ></i>
                                </th>
                                <th scope="col">
                                    Username{'     '}
                                    <i
                                        onClick={() => sort('username', 'dsc')}
                                        class="fas fa-arrow-up"
                                    ></i>
                                    {'     '}
                                    <i
                                        onClick={() => sort('username', 'asc')}
                                        class="fas fa-arrow-down"
                                    ></i>
                                </th>
                                <th scope="col">
                                    Email{'     '}
                                    <i
                                        onClick={() => sort('email', 'dsc')}
                                        class="fas fa-arrow-up"
                                    ></i>
                                    {'     '}
                                    <i
                                        onClick={() => sort('email', 'asc')}
                                        class="fas fa-arrow-down"
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
                {/* </div> */}
                {/* closing container div */}
                {/* closing div */}
            </div>
            {/* <Table /> */}
        </>
    );
}

export default SearchPage;
