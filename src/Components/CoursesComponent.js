import React from "react";


const Courses = () => {

    return (
        <div className="course-item flex justify-between bg-white rounded mx-4">
            <div className="">
                <p>Csc 102</p>
            </div>
            <div className=" ">
                <button className="course-button bg-red-600 hover:bg-red-700 text-white text-lg px-4 py-1  border rounded-half">Edit</button>
            </div>
            <div>
                <button className="course-button bg-red-600 hover:bg-red-700 text-white text-lg px-4 py-1  border rounded-half">
                    Delete
                </button>
            </div>
            <div className="rounded-full p-1 text-sm font-bold bg-red-600">1</div>
        </div>
    )
}


export default Courses;