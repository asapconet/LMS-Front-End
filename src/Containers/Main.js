import React from 'react'
import { Route, Routes } from 'react-router'
import { NavBar } from './navBar'
import Home from './Home'
import Registration from './Registration'
import SignIn from './SignIn'
import Blog from './Blog'
import BlogPagination from './BlogPagination'
import PostCreate from './PostCreate'
import CourseList from './CourseList'
const Main = () => {
    return (
            <Routes>
                 <Route path="/" element={
                     <>
                     <NavBar/>
                 <Home />
                 </>
                 }/>
                 <Route path="/courses/" element={<CourseList/>}/>
                 <Route path="/posts/" element={<Blog/>}/>
                 <Route path="/posts/create" element={<PostCreate/>}/>
                 <Route path="/posts/:id" element={<BlogPagination/>}/>
                <Route path="/user/login" element={<SignIn/>}></Route>
                <Route path="/user/student_register" element={<Registration/>}/>
            </Routes>
    )
}

export default Main
