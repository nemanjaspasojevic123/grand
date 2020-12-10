import React, { useState } from 'react';
import '../assets/style/Shows.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Shows = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {name: "IDJHOT", description: "Description", img: "Image", youtube_id: "IDJBALKAN", edit: "Edit", delete: "Delete"},
    {name: "IDJTOPLIST", description: "Description", img: "Image", youtube_id: "IDJBALKAN", edit: "Edit", delete: "Delete"},
    {name: "IDJMASH", description: "Description", img: "Image", youtube_id: "IDJBALKAN", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Name", field: "name", sortable: true, resizable: true, filter: true},
    {headerName: "Description", field: "description", sortable: true, resizable: true, filter: true},
    {headerName: "Image", field: "img", sortable: true, resizable: true},
    {headerName: "Youtube Id", field: "youtube_id", sortable: true, resizable: true, filter: true},
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
                <div className="shows">
                    <Sidedashbar />
                    <div className="shows-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Shows</h1>
                            <div>
                                <button type="submit" className="btn btn-secondary btn-title">Update Shows</button>
                                <button type="submit" className="btn btn-secondary btn-title">
                                    <Link to="/new-show">
                                        <div>Add New</div>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="shows-content">
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