import React from 'react'
import Button1, { Button2 } from '../Components/button'
import './Registration.css'
const Registration = () => {
    return (
        <div className='registration-container'>
            <div className='learn-more'>
                <div className='learn-more-heading'>
                    <h1>Sign up Right Now</h1>
                </div>
                <div className="learn-more-others">
                    <p className="text">For Unlimited Access to our Latest and well organised E-learning Materials
                        Uploaded On Daily Basis By Valid Lecturer of the Department.
                    </p>
                    <Button1>Learn More</Button1>
                </div>
            </div>
            <div className='signup-student-form'>
                <div className="form-container">
                    <div className="form-header">
                        <h2>Student Register :</h2>
                    </div>
                    <form>
                    <div className="form-control">
                        <label htmlFor="" ></label>
                        <input type="text" placeholder="Your Matric Number" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="" ></label>
                        <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="" ></label>
                        <input type="text" placeholder="Your Password" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="" ></label>
                        <input type="text" placeholder="Confirm Password" />
                    </div>
                    <Button2>SUBMIT</Button2>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
