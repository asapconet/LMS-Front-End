import React from 'react'
import './PostCreate.css'
import {Button3} from '../Components/button'

const PostCreate = () => {
    return (
        <div className="post-container p-3">
            <div className="post-form">

            <div className="post-header mb-3">
                <h2>Upload Your CourseLab Materials</h2>
            </div>
            
            <div className="post-main-form p-2">
                <form>
                    <div className="post-form-control">
                    <label htmlFor="course-title">Course Title </label>
                        <input id="course-title" type="text" />
                    </div>
                    <div className="post-form-control">
                        <label>Upload Material</label>
                        <input id="upload-mat" 
                        placeholder="Choose File"
                        type="file"/>
                    </div>
                    <div className="post-form-control">
                        <label htmlFor="tag">Tag</label>
                        <input id="tag" 
                        placeholder="Enter tags(#) seperated by commas. This will help in search results"
                        type="text" />
                    </div>
                    <div className="post-form-control">
                        <textarea rows="10" cols="18" placeholder="Description"></textarea>
                    </div>

                    <Button3>CREATE POST</Button3>
                </form>
            </div>
        </div>
        </div>
    )
}

export default PostCreate
