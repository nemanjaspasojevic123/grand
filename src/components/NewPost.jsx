import React, { useEffect, useState } from 'react';
import '../assets/style/NewPost.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';
import { getAllCategories, getAllPostTypes, getAllSurveys } from '../services/api.services';
import moment from "moment";

export const NewPost = () => {
    

    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [postTypes, setPostTypes] = useState([]);
    const [surveys, setSurveys] = useState([]);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [leadParagraph, setLeadParagraph] = useState('');
    const [author, setAuthor] = useState('');
    const [source, setSource] = useState('');
    const [postType, setPostType] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        getAllCategories().then(res => {
            for(let i = 0; i < res.data.data.length; i++){
                setCategories(prev => [...prev, res.data.data[i]])
            }
        })
        getAllPostTypes().then(res => {
            setPostTypes(res.data.data)
        })
        getAllSurveys().then(res => {
            setSurveys(res.data.data)
        })
    },[])

    const subcategoriesArr = (index, categories, setSubcategories) => {
        let i = parseInt(index)
    for(let j = 0; j < categories[i].children.length; j++){
    setSubcategories(prev => [...prev, categories[i].children[j]])
    }}

    const handleCategorie = (e, categories, setSubcategories) => {
        setSubcategories([]);
        subcategoriesArr(e.target.value, categories, setSubcategories)
    }

    const handleDate = (e) => {
        setDate(moment(e.target.value).format('YYYY-DD-MM h:mm:ss'))
    }
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleSlug = (e) => {
        setSlug(e.target.value)
    }
    const handleLeadParagraph = (e) => {
        setLeadParagraph(e.target.value)
    }
    const handleAuthor = (e) => {
        setAuthor(e.target.value)
    }
    const handleSource = (e) => {
        setSource(e.target.value)
    }
    const handlePostType = (e) => {
        setPostType(e.target.value)
    }

    let newPost = {
        title: title,
        slug: slug,
        lead_paragraph: leadParagraph,
        author: author,
        source: source,
        publish_date: date,
        post_type: postType,
        // text: text,
        // age_restricted: age_restricted,
        // post_category: post_category,
        // post_subcategory: post_subcategory,
    }

    const handleCreatePost = (e) => {
        console.log(newPost)
    }


    return (
        <>
            <Navbar />
                <div className="new-post">
                    <Sidedashbar />
                    <div className="new-post-page">
                        <div className="page-title">
                            <h1 className="page-title-text">New Post</h1>
                            <div>
                            <button type="button" className="btn btn-secondary btn-title">Save Draft</button>
                            <button type="button" className="btn btn-secondary btn-title" onClick={(e) => handleCreatePost(e)}>Create</button>
                            </div>
                        </div>
                        <div className="new-post-content">
                            <div className="form-group col-md-9">
                                <label className="new-post-item-content-label">Title</label>
                                <input type="text" className="form-control" placeholder="Post Title" onChange={(e) => handleTitle(e)}/>
                                <label className="new-post-item-content-label">Slug</label>
                                <input type="text" className="form-control" placeholder="this-is-amazing" onChange={(e) => handleSlug(e)}/>
                                <label className="new-post-item-content-label">Lead paragraph</label>
                                <input type="text" className="form-control" placeholder="Lead paragraph" onChange={(e) => handleLeadParagraph(e)}/>
                                <label className="new-post-item-content-label">Author</label>
                                <input type="text" className="form-control" placeholder="Author" onChange={(e) => handleAuthor(e)}/>
                                <label className="new-post-item-content-label">Source</label>
                                <input type="text" className="form-control" placeholder="Source" onChange={(e) => handleSource(e)}/>
                                <div className="ckeditor">
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data=''
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    />
                                </div>
                            </div> 
                            <div className="form-group col-md-3">
                                <label className="new-post-item-content-label">Select post type</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => handlePostType(e)}>
                                    <option defaultValue>Post Type</option>
                                    {postTypes.map(el => {return <option key={el.id}>{el.name}</option>})}
                                </select>
                                <label className="new-post-item-content-label">Date to Publish</label>
                                <div className="input-group mb-3">
                                    <input type="datetime-local" step="1" onChange={(e) => handleDate(e)} className="form-control" aria-describedby="button-addon2"/>
                                </div>
                                <div className="new-artist-image">
                                <label className="new-artist-content-label">Choose image</label>
                                <img src={dummy_img} alt="Tis is dummy_img" style={{height: 180}}></img>
                                <button type="submit" className="btn btn-secondary btn-title">Add Image</button>
                                </div>
                                <label className="new-post-item-content-label">Select category</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => handleCategorie(e, categories, setSubcategories)}>
                                    <option defaultValue>Category</option>
                                    {categories.map((el, i) => {return <option value={i} key={el.id}>{el.name}</option>})}
                                </select>
                                <label className="new-post-item-content-label">Select subcategory</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Subcategory</option>
                                    {subcategories.map(el => {return <option key={el.id}>{el.name}</option>})}
                                </select>
                                <label className="new-post-item-content-label">Select survey</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Survey</option>
                                    {surveys.map(el => {return <option key={el.id}>{el.title}</option>})}
                                </select>
                                <label className="new-post-item-content-label">Related tag</label>
                                <input type="text" className="form-control"/>
                                <label className="new-post-item-content-label">Tags</label>
                                <input type="text" className="form-control"/>
                                <div className="form-group new-post-checkbox">
                                    <input type="checkbox" className="form-check-input" />
                                    <label className="form-check-label">18+</label>
                                </div>
                                <label className="new-post-item-content-label">Related stories</label><br></br>
                                <button type="button" className="btn btn-secondary">Add Related</button><br></br>
                                <label className="new-post-item-content-label">Insert banner</label><br></br>
                                <button type="button" className="btn btn-secondary">Banner</button>
                            </div>   
                        </div>
                    </div>
                </div>
        </>
    )
}