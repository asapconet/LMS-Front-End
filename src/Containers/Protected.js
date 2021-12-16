import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate} from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Blog from "./Blog";
import { Categories } from "./Categories";
import CourseList from "./CourseList";
import { LevelPagination } from "./LevelsCourses";
import { Error } from "./NotFound";
import PostCreate from "./PostCreate";
import { Profile } from "./Profile";
import SinglePost from "./SinglePost";

export const ProtectedRoute = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        !isLoggedIn && navigate("/login");
    }, [isLoggedIn, navigate])
    // To do: Allow not found for unprotected routes

    return (
        <Routes>
            <Route path="/courses" element={<Blog />} />
            <Route path="/courses/:slug/:uuid" element={<SinglePost />} />
            <Route path='/levels' element={<Categories />} />
            <Route path='/levels/:level' element={<LevelPagination />} />
            <Route path="/courses/create" element={<PostCreate />} />
            <Route path="/user/courses" element={<CourseList />} />
            <Route path='/user/me/' element={<Profile/>} />
            <Route path="*" element={<Error code={404} message="Not Found" />} />
        </Routes>
    )
}