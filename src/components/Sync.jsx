import React from 'react';
import '../assets/style/Sync.css';
import { Navbar } from './Navbar';
import { Sidedashbar } from './Sidedashbar';

export const Sync = () => {
    return (
        <>
            <Navbar />
                <div className="sync">
                    <Sidedashbar />
                    <div className="sync-page">
                        <div className="page-title">
                            <h1 className="page-title-text">Synchronization</h1>
                        </div>
                        <div className="sync-content">
                            <table className="table">
                                <thead>
                                    <tr className="table-light">
                                        <th>Action Name</th>
                                        <th>Action call</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Singles views</td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                    <tr>
                                        <td>Playlist Spotovi</td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                    <tr>
                                        <td>Playlist info</td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                    <tr>
                                        <td>Shows info</td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                    <tr>
                                        <td>Social networks</td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                    <tr>
                                        <td>Tubers info</td>
                                        <td><button type="button" className="btn btn-secondary">Update</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <form>
                                <div className="form-group">
                                    <h5>Live TV Link/ID</h5>
                                    <input type="text" className="form-control col" placeholder="http://www.youtube.com"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
        </>
    )
}