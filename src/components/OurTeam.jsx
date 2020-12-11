import React, { useState } from 'react';
import '../assets/style/OurTeam.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const OurTeam = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {img: "Image", name: "Ognjen Jankovic", title: "scheduler", description: "Description", edit: "Edit", delete: "Delete"},
    {img: "Image", name: "Marta Buzurovic", title: "presenter", description: "Description", edit: "Edit", delete: "Delete"},
    {img: "Image", name: "Aleksandar Ginic", title: "editor", description: "Description", edit: "Edit", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Image", field: "image", sortable: true, resizable: true},
    {headerName: "Name", field: "name", sortable: true, resizable: true, filter: true},
    {headerName: "Title", field: "title", sortable: true, resizable: true, filter: true},
    {headerName: "Description", field: "description", sortable: true, resizable: true, filter: true},
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
                <div className="our-team">
                    <Sidedashbar />
                    <div className="our-team-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Our Team</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                    <Link to="/new-team">
                                        <div>Add New</div>
                                    </Link>
                            </button>
                        </div>
                        <div className="our-team-content">
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