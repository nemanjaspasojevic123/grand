import React, { useEffect, useState } from 'react';
import '../assets/style/Posts.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';

export const Posts = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);
const [filteredArray, setFilteredArray] = useState([]);

// eslint-disable-next-line
    const [rowData, setRowData] = useState([
        {status: "active", title: "Test singl1", date: "12/06/2020", ident: "test-single1", category: "NEWS"},
        {status: "draft", title: "Test single2", date: "14/06/2020", ident: "test-single2", category: "TV"},
        {status: "active", title: "Test single3", date: "20/06/2020", ident: "test-single3", category: "NEWS"}
    ]);

    const columnDefs = [
        {headerName: "Status", field: "status", sortable: true, resizable: true, filter: true},
        {headerName: "Title", field: "title", sortable: true, resizable: true, filter: true},
        {headerName: "Date", field: "date", sortable: true, resizable: true, filter: true},
        {headerName: "Ident", field: "ident", sortable: true, resizable: true, filter: true},
        {headerName: "Category", field: "category", sortable: true, resizable: true, filter: true}
    ]

    useEffect(() => {
        setFilteredArray(rowData);
    }, [rowData])

    const handleInput = (e) => {
        if (e.target.value === ''){
            setFilteredArray(rowData)
            return
        }
        let filteredPosts = rowData.filter(el => 
            el.status.toLowerCase().includes(e.target.value.toLowerCase()) || 
            el.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.date.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.ident.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.category.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredArray(filteredPosts)
    }

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
                                <input type="text" className="form-control posts-search col-6 col-sm-3" onChange={(e) => handleInput(e)} placeholder="Search for anything..."/>
                            </div>
                            <div className="ag-theme-material" style={ { height: 500, width: "100%" } }>
                                <AgGridReact 
                                defaultColDef={{
                                    floatingFilter: true,
                                }}
                                    pagination={true}
                                    paginationAutoPageSize={true}
                                    rowData={filteredArray}
                                    columnDefs={columnDefs}>
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}