import React from 'react';
import TableRow from '../TableRow/TableRow';
import users from '../../db';

function Table() {
    return (
        <div>
            <div className="container">
                <div className="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(value => (
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
            {/* closing container div */}
            {/* closing div */}
        </div>
    );
}

export default Table;
