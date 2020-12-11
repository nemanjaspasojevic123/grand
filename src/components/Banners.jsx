import React, { useState } from 'react';
import '../assets/style/Banners.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Banners = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {starting_date: "04/04/2019", ending_date: "04/04/2019", url: "url", description: "description", edit: "Edit"},
    {starting_date: "04/04/2019", ending_date: "04/04/2019", url: "url", description: "description", edit: "Edit"},
    {starting_date: "04/04/2019", ending_date: "04/04/2019", url: "url", description: "description", edit: "Edit"}
]);

const columnDefs = [
    {headerName: "Starting Date", field: "starting_date", sortable: true, resizable: true, filter: true},
    {headerName: "Ending Date", field: "ending_date", sortable: true, resizable: true, filter: true},
    {headerName: "URL", field: "url", sortable: true, resizable: true, filter: true},
    {headerName: "Description", field: "description", sortable: true, resizable: true, filter: true},
    {headerName: "Edit", field: "edit", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button className="btn-secondary"><i className="fa fa-edit"></i> Edit</button></div>
    }}
];

    return (
        <>
            <Navbar />
                <div className="banners">
                    <Sidedashbar />
                    <div className="banners-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Banners</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-banners">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="banners-content">
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