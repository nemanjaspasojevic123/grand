import React, { useState } from 'react';
import '../assets/style/Artists.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Artists = () => {

    // const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {image: "img1", sort: "1", artist: "NIKOLIJA", custom_status: "false", creator_status: "false", edit_tags: "Edit", delete: "Delete"},
    {image: "img2", sort: "2", artist: "RELJA", custom_status: "false", creator_status: "false", edit_tags: "Edit", delete: "Delete"},
    {image: "img3", sort: "3", artist: "MC STOJAN", custom_status: "false", creator_status: "false", edit_tags: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Image", field: "image", sortable: true, resizable: true},
    {headerName: "* Sort", field: "sort", sortable: true, resizable: true, filter: true, editable: true},
    {headerName: "Artist", field: "artist", sortable: true, resizable: true, filter: true},
    {headerName: "Custom/Status", field: "custom_status", sortable: true, resizable: true, filter: true},
    {headerName: "Custom Category", field: "custom_category", sortable: true, resizable: true, checkboxSelection: true},
    {headerName: "Creator/Status", field: "creator_status", sortable: true, resizable: true, filter: true},
    {headerName: "Creator", field: "creator", sortable: true, resizable: true, checkboxSelection: true},
    {headerName: "Edit Tags", field: "edit_tags", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button className="btn-secondary"><i className="fa fa-edit"></i> Edit</button></div>
    }},
    {headerName: "Delete", field: "delete", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div className="grid-btn"><button onClick={()=>handleDelete(params)} className="btn-secondary"><i className="fa fa-trash"></i> Delete</button></div>
    }},
];

    return (
        <>
            <Navbar />
                <div className="artists">
                    <Sidedashbar />
                    <div className="artists-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Artists</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-artist">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="artists-content">
                            <label>Dubble click on cell with asterisk (*) to edit it.</label>
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