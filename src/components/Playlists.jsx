import React, { useState } from 'react';
import '../assets/style/Playlists.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Playlists = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {title: "Balkan Hitovi", youtube_id: "EncrPVBBVOw", sort: "1", edit: "Edit", delete: "Delete"},
    {title: "Balkan Trap", youtube_id: "EncrPVBBVOw", sort: "2", edit: "Edit", delete: "Delete"},
    {title: "Retro Hitovi", youtube_id: "EncrPVBBVOw", sort: "3", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Title", field: "title", sortable: true, resizable: true, filter: true, minWidth: 300},
    {headerName: "Youtube Id", field: "youtube_id", sortable: true, resizable: true, filter: true, minWidth: 500},
    {headerName: "* Sort", field: "sort", sortable: true, resizable: true, filter: true, editable: true},
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
                <div className="playlists">
                    <Sidedashbar />
                    <div className="playlists-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Playlists</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-playlist">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="playlists-content">
                            <div className="ag-theme-material" style={ { height: 500, width: "100%" } }>
                                <label>Dubble click on cell with asterisk (*) to edit it.</label>
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