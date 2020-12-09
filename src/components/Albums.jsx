import React, { useState } from 'react';
import '../assets/style/Albums.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Albums = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {image: "img1", upc: "56489725", sort: "1", artist: "NIKOLIJA", title: "YIN & YUNG", release_date: "04/04/2019", edit_tags: "Edit", delete: "Delete"},
    {image: "img2", upc: "56489725", sort: "2", artist: "RELJA", title: "NIJE LAKO BITI JA", release_date: "07/04/2020", edit_tags: "Edit", delete: "Delete"},
    {image: "img3", upc: "56489725", sort: "3", artist: "MC STOJAN", title: "UDAHNI DUBOKO", release_date: "24/04/2019", edit_tags: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Image", field: "image", sortable: true, resizable: true},
    {headerName: "UPC", field: "upc", sortable: true, resizable: true, filter: true},
    {headerName: "* Sort", field: "sort", sortable: true, resizable: true, filter: true, editable: true},
    {headerName: "Artist", field: "artist", sortable: true, resizable: true, filter: true},
    {headerName: "Title", field: "title", sortable: true, resizable: true, filter: true},
    {headerName: "Release date", field: "release_date", sortable: true, resizable: true, filter: true},
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
                <div className="albums">
                    <Sidedashbar />
                    <div className="albums-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Albums</h1>
                        </div>
                        <div className="albums-content">
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