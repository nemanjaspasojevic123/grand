import React, { useState } from 'react';
import '../assets/style/Posts.css';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Posts = () => {

    // const [gridApi, setGridApi] = useState(null);
    // const [gridColumnApi, setGridColumnApi] = useState(null);

// eslint-disable-next-line
    const [rowData, setRowData] = useState([
        {status: "active", title: "Test single", date: "12/06/2020", ident: "test-single", category: "NEWS"},
        {status: "active", title: "Test single", date: "12/06/2020", ident: "test-single", category: "NEWS"},
        {status: "active", title: "Test single", date: "12/06/2020", ident: "test-single", category: "NEWS"}
    ]);

    return (
        <>
            <Navbar />
                <div className="posts">
                    <Sidedashbar />
                    <div className="posts-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Posts</h1>
                            <button type="submit" className="btn btn-secondary btn-title">
                                <Link to="/new-post">
                                    <div>Add New</div>
                                </Link>
                            </button>
                        </div>
                        <div className="posts-content">
                            <div>
                            <input type="text" className="form-control posts-search col-6 col-sm-3" placeholder="Search for anything..."/>
                            </div>
                            <div className="ag-theme-alpine" style={ { height: 500, width: "100%" } }>
                                <AgGridReact 
                                    floatingFilter={true}
                                    pagination={true}
                                    paginationAutoPageSize={true}
                                    rowData={rowData}>
                                    <AgGridColumn field="status" sortable={true} filter={true} ></AgGridColumn>
                                    <AgGridColumn field="title" sortable={true} filter={true} ></AgGridColumn>
                                    <AgGridColumn field="date" sortable={true} filter={true} ></AgGridColumn>
                                    <AgGridColumn field="ident" sortable={true} filter={true} ></AgGridColumn>
                                    <AgGridColumn field="category" sortable={true} filter={true} ></AgGridColumn>
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}