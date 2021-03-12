import React, { useEffect, useState } from 'react';
import '../assets/style/Posts.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../services/api.services';

export const Posts = () => {

// const [gridApi, setGridApi] = useState(null);
// const [gridColumnApi, setGridColumnApi] = useState(null);
const [array, setArray] = useState([]);
const [filteredArray, setFilteredArray] = useState([]);

useEffect(() => {
    getAllPosts().then(res => {
        setRowData(res.data.data)
        console.log(res.data.data)
    })
},[])

const handleDelete = (params) => {
    console.log(params.data)
}

// eslint-disable-next-line
    const [rowData, setRowData] = useState([
        // {status: "active", title: "Test singl1", date: "12/06/2020", ident: "test-single1", category: "NEWS", subcategory: "SHOWBIZZ", edit_tags: "Edit", delete: "Delete"},
        // {status: "draft", title: "Test single2", date: "14/06/2020", ident: "test-single2", category: "TV", subcategory: "SHOWBIZZ", edit_tags: "Edit", delete: "Delete"},
        // {status: "active", title: "Test single3", date: "20/06/2020", ident: "test-single3", category: "NEWS", subcategory: "SHOWBIZZ", edit_tags: "Edit", delete: "Delete"}
    ]);

    const columnDefs = [
        {headerName: "Status", field: "draft", sortable: true, resizable: true, filter: true},
        {headerName: "Title", field: "title", sortable: true, resizable: true, filter: true},
        {headerName: "Date", field: "publish_date", sortable: true, resizable: true, filter: true},
        {headerName: "Ident", field: "slug", sortable: true, resizable: true, filter: true},
        {headerName: "Category", field: "post_category.name", sortable: true, resizable: true, filter: true},
        {headerName: "Subcategory", field: "post_subcategory.name", sortable: true, resizable: true, filter: true},
        {headerName: "Edit Tags", field: "edit_tags", sortable: true, resizable: true, cellRendererFramework: (params) => {
            return  <div><button className="btn-secondary"><i className="fa fa-edit"></i> Edit</button></div>
          }},
          {headerName: "Delete", field: "delete", sortable: true, resizable: true, cellRendererFramework: (params) => {
            return  <div><button onClick={()=>handleDelete(params)} className="btn-secondary"><i className="fa fa-trash"></i> Delete</button></div>
          }},
    ]

    useEffect(() => {
        setFilteredArray(rowData);
        setArray(rowData)
        return (() => {
            setFilteredArray(null)
            setArray(null)
        })
    }, [rowData])

    const handleInput = (e) => {
        if (e.target.value === ''){
            setFilteredArray(array)
            return
        }
        let filteredPosts = array.filter(el => 
            el.draft.toString().toLowerCase().includes(e.target.value.toLowerCase()) || 
            el.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.publish_date.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.slug.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.post_category.name.toLowerCase().includes(e.target.value.toLowerCase()) || 
            el.post_subcategory.name.toLowerCase().includes(e.target.value.toLowerCase()));
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