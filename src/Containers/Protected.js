import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { About } from "./About";
import Blog from "./Blog";
import BlogPagination from "./BlogPagination";
import { Categories } from "./Categories";
import CourseList from "./CourseList";
import Home from "./Home";
import { NavBar } from "./navBar";
import { Error } from "./NotFound";
import PostCreate from "./PostCreate";
import SinglePost from "./SinglePost";

export const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        !isLoggedIn() && navigate("/user/login");
    }, [isLoggedIn, navigate])

    return (
        <Routes>
            <Route path="/courses" element={<Blog />} />
            <Route path="/courses/singlepost" element={<SinglePost />} />
            <Route path="/free" element={<BlogPagination />} />
            <Route path='/levels' element={<Categories />} />
            <Route path="/courses/create" element={<PostCreate />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/courses" element={<CourseList />} />
            <Route path="*" element={<Error code={404} message="Not Found" />} />
        </Routes>
    )
}