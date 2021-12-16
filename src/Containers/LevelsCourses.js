import React from "react";
import defaultPost from "../assets/postimg.JPG";
import { Link, useParams } from "react-router-dom";
import { ResourceURL } from "../API/BaseURL";
import { Loading } from "../Components/Loading";
import { useLoadItem } from "../utils/useLoadItem";
import { BlogListing } from "./BlogPagination";

export const LevelPagination = () => {
    const { level } = useParams();
    const { loading, state, refetch } = useLoadItem(`${ResourceURL}?level=${level}`);

    return (
        <div className="px-16 bg-white py-16">
            <BlogListing posts={state.posts} />
            <div className="flex justify-center">
                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {state.next && (
                            <button
                                onClick={refetch}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Load More
                            </button>
                        )}
                    </>
                )}
            </div>
            {state.error && (
                <div className="flex justify-center">
                    <h1>An error has occured, please try again, later.</h1>
                </div>
            )}
        </div>
    );
};
