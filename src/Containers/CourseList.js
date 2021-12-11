import React from 'react'
// import '../Styles/Pages/CourseList.css'
import CourseComponent from '../Components/CoursesComponent'
const CourseList = () => {
    return (
        <div className="courses-container">
            <div className="available-courses">
                <div className="header-text">
                    <strong><h1>COURSES AVAILABLE IN OUR DATABASE</h1></strong>
                </div>
                <div className="course-section">
                    <div className="border-b">
                        <CourseComponent/>
                        <CourseComponent/>
                        <CourseComponent/>
                        <CourseComponent/>
                        <CourseComponent/>
                        <CourseComponent/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CourseList


