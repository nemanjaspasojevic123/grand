import React from 'react';
import '../assets/style/NewPost.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dummy_img from '../assets/images/dummy-image-landscape.jpg';


export const NewPost = () => {
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
                            <button type="button" className="btn btn-secondary btn-title">Create</button>
                            </div>
                        </div>
                        <div className="new-post-content">
                            <div className="form-group col-md-9">
                                <label className="new-post-item-content-label">Title</label>
                                <input type="text" className="form-control" placeholder="Post Title"/>
                                <label className="new-post-item-content-label">Slug</label>
                                <input type="text" className="form-control" placeholder="this-is-amazing"/>
                                <label className="new-post-item-content-label">Lead paragraph</label>
                                <input type="text" className="form-control" placeholder="Lead paragraph"/>
                                <label className="new-post-item-content-label">Author</label>
                                <input type="text" className="form-control" placeholder="Author"/>
                                <label className="new-post-item-content-label">Source</label>
                                <input type="text" className="form-control" placeholder="Source"/>
                                <div className="ckeditor">
                                <CKEditor
                                    editor={ ClassicEditor }
                                    data="<p>Hello from CKEditor 5!</p>"
                                    onReady={ editor => {
                                        // You can store the "editor" and use when it is needed.
                                        console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        console.log( { event, editor, data } );
                                    } }
                                    onBlur={ ( event, editor ) => {
                                        console.log( 'Blur.', editor );
                                    } }
                                    onFocus={ ( event, editor ) => {
                                        console.log( 'Focus.', editor );
                                    } }
                                    />
                                </div>
                            </div> 
                            <div className="form-group col-md-3">
                                <label className="new-post-item-content-label">Select post type</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Post Type</option>
                                    <option value="1">TEXT</option>
                                    <option value="2">VIDEO</option>
                                    <option value="3">SINGLE</option>
                                    <option value="4">YOUTUBE THUMB</option>
                                </select>
                                <label className="new-post-item-content-label">Date to Publish</label>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="12/10/2020" aria-label="12/10/2020" aria-describedby="button-addon2"/>
                                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-calendar"></i></button>
                                </div>
                                <div className="new-artist-image">
                                <label className="new-artist-content-label">Choose image</label>
                                <img src={dummy_img} alt="Tis is dummy_img" style={{height: 180}}></img>
                                <button type="submit" className="btn btn-secondary btn-title col-md-4">Add Image</button>
                                </div>
                                <label className="new-post-item-content-label">Select category</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Category</option>
                                    <option value="1">NEWS</option>
                                    <option value="2">INFLUENCE</option>
                                    <option value="3">RE:COVERED</option>
                                </select>
                                <label className="new-post-item-content-label">Select subcategory</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Subcategory</option>
                                    <option value="1">SHOWBIZZ</option>
                                    <option value="2">MUSIC</option>
                                    <option value="3">LIFE</option>
                                </select>
                                <label className="new-post-item-content-label">Select survey</label>
                                <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                    <option defaultValue>Survey</option>
                                    <option value="1">option1</option>
                                    <option value="2">option2</option>
                                    <option value="3">option3</option>
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