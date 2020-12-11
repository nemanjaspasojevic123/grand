import React, { useState } from 'react';
import '../assets/style/Contests.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Contests = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {image: "img1", title: "Title", starting_date: "04/04/2019", ending_date: "04/04/2019", upload_format: "upload_format", description: "description", preview: "Preview", edit: "Edit", delete: "Delete"},
    {image: "img2", title: "Title", starting_date: "04/04/2019", ending_date: "04/04/2019", upload_format: "upload_format", description: "description", preview: "Preview", edit: "Edit", delete: "Delete"},
    {image: "img3", title: "Title", starting_date: "04/04/2019", ending_date: "04/04/2019", upload_format: "upload_format", description: "description",  preview: "Preview", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Image", field: "image", sortable: true, resizable: true},
    {headerName: "Title", field: "title", sortable: true, resizable: true, filter: true},
    {headerName: "Starting Date", field: "starting_date", sortable: true, resizable: true, filter: true},
    {headerName: "Ending Date", field: "ending_date", sortable: true, resizable: true, filter: true},
    {headerName: "Upload Format", field: "upload_format", sortable: true, resizable: true, filter: true},
    {headerName: "Description", field: "description", sortable: true, resizable: true, cellRendererFramework: (params) => {
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
                <div className="contests">
                    <Sidedashbar />
                    <div className="contests-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Contests</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-contest">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="contests-content">
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