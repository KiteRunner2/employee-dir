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

    function sort(event, order) {
        console.log(`sort function called`);
        const sortParam = event.target.textContent.toLowerCase();
        console.log('clicked!', sortParam);
        showUserList.sort(function(firstEl, secondEl) {
            const firstParam = firstEl[sortParam].toLowerCase();
            const secondParam = secondEl[sortParam].toLowerCase();
            // if (firstParam > secondParam) {
            //     return 1;
            // }
            if (firstParam < secondParam) {
                return 1;
            }
            return 0;
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
                                <th scope="col">#</th>
                                <th onClick={e => sort(e)} scope="col">
                                    Name
                                </th>
                                <th onClick={e => sort(e)} scope="col">
                                    Username
                                </th>
                                <th onClick={e => sort(e)} scope="col">
                                    Email
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
