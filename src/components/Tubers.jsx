import React, { useState } from 'react';
import '../assets/style/Tubers.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Tubers = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {tuber: "RUŽA RUPIĆ", playlist_id: "Playlist1", edit: "Edit", delete: "Delete"},
    {tuber: "JENNI MARTIN", playlist_id: "Playlist2", edit: "Edit", delete: "Delete"},
    {tuber: "ANDRIJA JO", playlist_id: "Playlist3", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Tuber", field: "tuber", sortable: true, resizable: true, filter: true, minWidth: 400},
    {headerName: "Playlist Id", field: "playlist_id", sortable: true, resizable: true, filter: true, minWidth: 400},
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
                <div className="tubers">
                    <Sidedashbar />
                    <div className="tubers-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Tubers</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Update</div>
                            </button>
                        </div>
                        <div className="tubers-content">
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