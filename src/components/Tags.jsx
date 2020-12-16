import React, { useEffect, useState } from 'react';
import '../assets/style/Tags.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';
import tags from '../data.js'

export const Tags = () => {

    const [array, setArray] = useState([]);
    const [filteredArray, setFilteredArray] = useState([]);

    useEffect(() => {
        setFilteredArray(tags);
        setArray(tags);
        return (() => {
            setFilteredArray(null)
            setArray(null)
        })
    }, [])

    const handleInput = (e) => {
        if (e.target.value === ''){
            setFilteredArray(array)
            return
        }
        let filteredTags = array.filter(el => el.tag.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredArray(filteredTags)
    }

    return (
        <>
            <Navbar />
                <div className="tags">
                    <Sidedashbar />
                    <div className="tags-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Tags</h1>
                        </div>
                        <div className="tags-content">
                            <input type="text" className="form-control posts-search col-6 col-sm-3" onChange={(e) => handleInput(e)} placeholder="Search for tags..."/>
                        </div>
                        <div>{filteredArray.map(el => {return <div key={el.id}>{el.tag}</div>})}</div>
                    </div>
                </div>
        </>
    )
}