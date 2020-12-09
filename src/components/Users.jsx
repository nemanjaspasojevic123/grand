import React, { useState } from 'react';
import '../assets/style/Users.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Users = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

// eslint-disable-next-line
const [rowData, setRowData] = useState([
{image: "img", email: "something@mail.com", display_name: "Lena", phone_number: "", status: "ACTIVE", banned_for: "", edit: "Edit"},
    {image: "img", email: "something@mail.com", display_name: "Iva", phone_number: "", status: "ACTIVE", banned_for: "", edit: "Edit"},
    {image: "img", email: "something@mail.com", display_name: "Ana", phone_number: "", status: "ACTIVE", banned_for: "", edit: "Edit"}
]);

const columnDefs = [
    {headerName: "Image", field: "image", sortable: true, resizable: true},
    {headerName: "Email", field: "email", sortable: true, resizable: true, filter: true, minWidth: 400},
    {headerName: "Display name", field: "display_name", sortable: true, resizable: true, filter: true},
    {headerName: "Phone number", field: "phone_number", sortable: true, resizable: true, filter: true},
    {headerName: "Status", field: "status", sortable: true, resizable: true, filter: true},
    {headerName: "Banned for", field: "banned_for", sortable: true, resizable: true, filter: true},
    {headerName: "Edit", field: "edit", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button className="btn-secondary"><i className="fa fa-edit"></i> Edit</button></div>
    }}
];

    return (
        <>
            <Navbar />
                <div className="users">
                    <Sidedashbar />
                    <div className="users-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Users</h1>
                        </div>
                        <div className="users-content">
                            <div className="ag-theme-material" style={ { height: 500, width: "100%" } }>
                                <div className="form-group col-md-4 users-form-group">
                                    <label className="users-item-content-label">User limit</label>
                                    <input id="frequency" className="form-control" type="number" placeholder="User limit" min="0" max="10000" step="1"></input>
                                    <button type="submit" className="btn btn-secondary users-btn">Download file</button>
                                </div>
                                <AgGridReact 
                                defaultColDef={{
                                    floatingFilter: true,
                                }}
                                pagination={true}
                                paginationAutoPageSize={true}
                                rowData={rowData}
                                columnDefs={columnDefs}>
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}