import React, { useState } from 'react';
import '../assets/style/AdminUsers.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const AdminUsers = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {user_id: "5b4t64s4tgh51s69ex", username: "Demo", role: "admin", edit: "Edit", delete: "Delete"},
    {user_id: "5b4t64s4tgh51s69ex", username: "G", role: "liveTVEditor", edit: "Edit", delete: "Delete"},
    {user_id: "5b4t64s4tgh51s69ex", username: "Aleksa", role: "Editor iydanja", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "UserId", field: "user_id", sortable: true, resizable: true, filter: true, minWidth: 300},
    {headerName: "Username", field: "username", sortable: true, resizable: true, filter: true, minWidth: 500},
    {headerName: "Role", field: "role", sortable: true, resizable: true, filter: true, editable: true},
    {headerName: "Edit", field: "edit", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button className="btn-secondary"><i className="fa fa-edit"></i> Edit</button></div>
    }},
    {headerName: "Delete", field: "delete", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button onClick={()=>handleDelete(params)} className="btn-secondary"><i className="fa fa-trash"></i> Delete</button></div>
    }},
];

    return (
        <>
            <Navbar />
                <div className="admin-users">
                    <Sidedashbar />
                    <div className="admin-users-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Admin Users</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-cms-user">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="admin-users-content">
                            <div className="ag-theme-material" style={ { height: 500, width: "100%" } }>
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