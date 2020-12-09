import React, { useState } from 'react';
import '../assets/style/Roles.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Roles = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {name: "admin", permissions: "poll / survey / media / position", edit: "Edit", delete: "Delete"},
    {name: "editor", permissions: "poll / survey / media / position", edit: "Edit", delete: "Delete"},
    {name: "commentEditor", permissions: "comment / user", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Name", field: "name", sortable: true, resizable: true, filter: true, minWidth: 200},
    {headerName: "Permissions", field: "permissions", sortable: true, resizable: true, filter: true, minWidth: 600},
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
                <div className="roles">
                    <Sidedashbar />
                    <div className="roles-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Roles</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-role">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="roles-content">
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