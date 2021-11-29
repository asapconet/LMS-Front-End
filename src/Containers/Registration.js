import React from 'react'
import Button1 from '../Components/button'
import styles from './Registration.module.css'
const Registration = () => {
    return (
        <div className={styles['registration-container']}>
            <div className={styles['learn-more']}>
                <div className={styles['learn-more-heading']}>
                    <h1>Sign up Right Now</h1>
                </div>
                <div>
                    <p>lorem</p>
                    <Button1>Learn More</Button1>
                </div>
            </div>
            <div className={styles['signup-student-form']}>
                
            </div>
        </div>
    )
}

export default Registration
