import React from 'react'
import './Comment.css'
import Button1 from '../Components/button';

const Comment = () => {
    return (
        <div className="comment-section bg-white px-2 py-5">
            <div className="comment-header mb-2 ">
                <h2>Leave a Reply</h2>
            </div>
            <form>
                <div className="comment-form-control">
                    <label htmlFor="comment">Your Comment</label>
                    <textarea id="comment" rows='6' placeholder="Type Your Comment Here"></textarea>
                </div>
                <div className="comment-form-control">
                    <label htmlFor="comment-name">Your Comment:</label>
                    <input className="p-1" id="comment-name" placeholder="Type in your name here" />
                </div>
                <div className="comment-form-control">
                    <label htmlFor="comment-name">Your Email</label>
                    <input className="p-1" type="email" id="Type mail" />
                </div>
                <div className="action-control">
                <Button1 className="bg-black">POST</Button1>
                </div>
            </form>
        </div>
    )
}

export default Comment
