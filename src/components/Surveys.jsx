import React, { useState } from 'react';
import '../assets/style/Surveys.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Surveys = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {title: "Title", options: "Options", preview: "Preview", edit: "Edit", delete: "Delete"},
    {title: "Title", options: "Options", preview: "Preview", edit: "Edit", delete: "Delete"},
    {title: "Title", options: "Options", preview: "Preview", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Title", field: "title", sortable: true, resizable: true, filter: true},
    {headerName: "Options", field: "options", sortable: true, resizable: true, filter: true},
    {headerName: "Preview", field: "preview", sortable: true, resizable: true, cellRendererFramework: (params) => {
        return  <div><button className="btn-secondary"><i className="fa fa-eye"></i> View</button></div>
      }},
    {headerName: "Edit", field: "edit", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button className="btn-secondary"><i className="fa fa-edit"></i> Edit</button></div>
    }},
    {headerName: "Delete", field: "delete", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div className="grid-btn"><button onClick={()=>handleDelete(params)} className="btn-secondary"><i className="fa fa-trash"></i> Delete</button></div>
    }},
];

    return (
        <>
            <Navbar />
                <div className="surveys">
                    <Sidedashbar />
                    <div className="surveys-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Surveys</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-survey">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="surveys-content">
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