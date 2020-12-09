import React, { useState } from 'react';
import '../assets/style/Categories.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Categories = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {name: "RE:COVERED", name_srb: "RE:COVERED", router: "re-covered", color: "#e46edc3", status: "Active", activate_deactivate: "04/04/2019", edit_tags: "Edit", delete: "Delete"},
]);

const columnDefs = [
    {headerName: "Name", field: "name", sortable: true, resizable: true},
    {headerName: "nameSrb", field: "name_srb", sortable: true, resizable: true, filter: true},
    {headerName: "Router", field: "router", sortable: true, resizable: true, filter: true, editable: true},
    {headerName: "Color", field: "color", sortable: true, resizable: true, filter: true},
    {headerName: "Status", field: "status", sortable: true, resizable: true, filter: true},
    {headerName: "Activate/Deactivate", field: "activate_deactivate", sortable: true, resizable: true, filter: true, cellRendererFramework: (params) => {
        if(params.data.status === "Active"){ 
            return (
                <div><button className="btn-secondary"><i className="fa fa-edit"></i> Deactivate</button></div>)}
            else {
            return(
                <div><button className="btn-secondary"><i className="fa fa-edit"></i> Activate</button></div>)}
      }},
    {headerName: "Edit", field: "edit_tags", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button className="btn-secondary"><i className="fa fa-edit"></i> Edit</button></div>
    }},
    {headerName: "Delete", field: "delete", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div className="grid-btn"><button onClick={()=>handleDelete(params)} className="btn-secondary"><i className="fa fa-trash"></i> Delete</button></div>
    }},
];

    return (
        <>
            <Navbar />
                <div className="categories">
                    <Sidedashbar />
                    <div className="categories-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Custom Categories</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-custom-categories">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="categories-content">
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