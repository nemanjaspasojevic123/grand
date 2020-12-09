import React, { useState } from 'react';
import '../assets/style/Singles.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Singles = () => {


// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {image: "img1", upc: "56489725", status: "AUTORIZED", sort: "1", artist: "NIKOLIJA", title: "YIN & YUNG", youtube_id: "9xehHNkahiw", views: "743498", release_date: "04/04/2019", edit: "Edit", delete: "Delete"},
    {image: "img2", upc: "56489725", status: "AUTORIZED", sort: "2", artist: "RELJA", title: "NIJE LAKO BITI JA", youtube_id: "9xehHNkahiw", views: "904578", release_date: "07/04/2020", edit: "Edit", delete: "Delete"},
    {image: "img3", upc: "56489725", status: "AUTORIZED", sort: "3", artist: "MC STOJAN", title: "UDAHNI DUBOKO", youtube_id: "9xehHNkahiw", views: "634782", release_date: "24/04/2019", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Image", field: "image", sortable: true, resizable: true},
    {headerName: "UPC", field: "upc", sortable: true, resizable: true, filter: true},
    {headerName: "Status", field: "status", sortable: true, resizable: true, filter: true},
    {headerName: "* Sort", field: "sort", sortable: true, resizable: true, filter: true, editable: true},
    {headerName: "Artist", field: "artist", sortable: true, resizable: true, filter: true},
    {headerName: "Title", field: "title", sortable: true, resizable: true, filter: true},
    {headerName: "YouTube Id", field: "youtube_id", sortable: true, resizable: true, filter: true},
    {headerName: "Premiere", field: "premiere", sortable: true, resizable: true, checkboxSelection: true},
    {headerName: "Views", field: "views", sortable: true, resizable: true, filter: true},
    {headerName: "Release date", field: "release_date", sortable: true, resizable: true, filter: true},
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
                <div className="singles">
                    <Sidedashbar />
                    <div className="singles-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Singles</h1>
                            <div>
                                <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Update Spotovi</div>
                                </button>
                                <button type="submit" className="btn btn-secondary btn-title">
                                    <div>Update Views</div>
                                </button>
                                <button type="submit" className="btn btn-secondary btn-title">
                                    <Link to="/new-singles">
                                        <div>Add New</div>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="singles-content">
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