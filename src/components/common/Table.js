import React, { Component } from 'react';
import { Link } from "react-router-dom"
class Table extends Component {

    render() {
        const { columns, data, selectUser, onDeleteUser } = this.props;
        let tableRow;
        let tableCols = columns.map((col, index) => <th key={index} scope="col">{col}</th>);
        if (data.length > 0) {
            tableRow = data.map(({ id, avatar_url, login, url }) => {
                return (
                    <tr key={id}>
                        <th scope="row">{id}</th>
                        <td> <img style={{ width: "100px", height: "100px", borderRadius: "50%" }} src={avatar_url} alt="avatar" /></td>
                        <td>{login}</td>
                        <td>
                            <button onClick={(e) => {
                                e.preventDefault();
                                selectUser({ id, login })
                            }} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Edit
                            </button>
                        </td>
                        <td>
                            <button onClick={() => onDeleteUser(id)} type="button" className="btn btn-primary">
                                Delete
                            </button>
                        </td>
                        <td> <Link to={`/details/${login}`}>View</Link> </td>
                    </tr>
                );
            });
        }
        else {
            tableRow = <tr><td>No Data</td></tr>
        }
        return (
            <>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            {tableCols}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRow}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Table;
