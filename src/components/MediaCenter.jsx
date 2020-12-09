import React, { useState } from 'react';
import '../assets/style/MediaCenter.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const MediaCenter = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {image: "img1", tags: "Test single1", edit_tags: "Edit", delete: "Delete"},
    {image: "img2", tags: "Test single2", edit_tags: "Edit", delete: "Delete"},
    {image: "img3", tags: "Test single3", edit_tags: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Image", field: "image", sortable: true, resizable: true},
    {headerName: "Tags", field: "tags", sortable: true, resizable: true, filter: true, minWidth: 400},
    {headerName: "Edit Tags", field: "edit_tags", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button className="btn-secondary"><i className="fa fa-edit"></i> Edit</button></div>
    }},
    {headerName: "Delete", field: "delete", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button onClick={()=>handleDelete(params)} className="btn-secondary"><i className="fa fa-trash"></i> Delete</button></div>
    }},
];


    return (
        <>
            <Navbar />
                <div className="media-center">
                    <Sidedashbar />
                    <div className="media-center-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Media Center</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-media-item">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="media-center-content">
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