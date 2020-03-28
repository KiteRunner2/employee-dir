import React from 'react';

function TableRow(props) {
    return (
        <>
            <tr>
                <th scope="row">{props.id}</th>
                <td>{props.name}</td>
                <td>{props.username}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
            </tr>

            {/* closing <> */}
        </>
    );
}

export default TableRow;
