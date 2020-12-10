import React, { useState } from 'react';
import '../assets/style/Comments.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Comments = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);

const handleDelete = (params) => {
    console.log(params.data)
}
// eslint-disable-next-line
const [rowData, setRowData] = useState([
    {status: "Approved", story: "Story", user: "Marko Stojanovic", comment: "Comment", responded_to: "", release_date: "04/04/2019", approve: "Approve", deny: "Deny", delete: "Delete"},
    {status: "Approved", story: "Story", user: "Marko Stojanovic", comment: "Comment", responded_to: "", release_date: "07/04/2020", approve: "Approve", deny: "Deny", delete: "Delete"},
    {status: "Approved", story: "Story", user: "Marko Stojanovic", comment: "Comment", responded_to: "", release_date: "24/04/2019", approve: "Approve", deny: "Deny", delete: "Delete"}
]);

const columnDefs = [
    {headerName: "Status", field: "status", sortable: true, resizable: true, filter: true},
    {headerName: "Story", field: "story", sortable: true, resizable: true, filter: true},
    {headerName: "User", field: "user", sortable: true, resizable: true, filter: true},
    {headerName: "Comment", field: "comment", sortable: true, resizable: true, filter: true},
    {headerName: "Responded to", field: "responded_to", sortable: true, resizable: true, filter: true},
    {headerName: "Approve", field: "approve", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div><button className="btn-secondary"><i className="fa fa-check"></i> Approve</button></div>
    }},
    {headerName: "Deny", field: "deny", sortable: true, resizable: true, cellRendererFramework: (params) => {
        return  <div><button className="btn-secondary"><i className="fa fa-ban"></i> Deny</button></div>
      }},
    {headerName: "Delete", field: "delete", sortable: true, resizable: true, cellRendererFramework: (params) => {
      return  <div className="grid-btn"><button onClick={()=>handleDelete(params)} className="btn-secondary"><i className="fa fa-trash"></i> Delete</button></div>
    }},
];

    return (
        <>
            <Navbar />
                <div className="comments">
                    <Sidedashbar />
                    <div className="comments-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Comments</h1>
                            <button type="submit" className="btn btn-secondary btn-title">Refresh</button>
                        </div>
                        <div className="comments-content">
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