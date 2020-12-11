import React, { useState } from 'react';
import '../assets/style/Polls.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Polls = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {image: "img1", date_created: "04/04/2019", date_start: "04/04/2019", date_end: "04/04/2019", edit: "Edit", delete: "Delete"},
    {image: "img2", date_created: "04/04/2019", date_start: "04/04/2019", date_end: "07/04/2020", edit: "Edit", delete: "Delete"},
    {image: "img3", date_created: "04/04/2019", date_start: "04/04/2019", date_end: "24/04/2019", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Image", field: "image", sortable: true, resizable: true},
    {headerName: "Date Created", field: "date_created", sortable: true, resizable: true, filter: true},
    {headerName: "Date Start", field: "date_start", sortable: true, resizable: true, filter: true},
    {headerName: "Date End", field: "date_end", sortable: true, resizable: true, filter: true},
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
                <div className="polls">
                    <Sidedashbar />
                    <div className="polls-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Polls</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-poll">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="polls-content">
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