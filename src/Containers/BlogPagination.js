import React from "react";
import defaultPost from "../assets/postimg.JPG";
import { Link } from "react-router-dom";
import { ResourceURL } from "../API/BaseURL";
import { Loading } from "../Components/Loading";
import { useLoadItem } from "../utils/useLoadItem";

export const BlogItem = ({
  posted_by,
  level,
  uuid,
  created,
  last_updated,
  cover,
  title,
  content,
  description,
  slug,
}) => {
  // const created_date = new Date(created).toDateString();
  const last_updated_date = new Date(last_updated).toDateString();

  return (
    <Link to={`/courses/${slug}/${uuid}`} className="relative bg-white shadow-lg rounded">
      <img src={cover && defaultPost} alt="" className="w-full h-64 object-cover rounded" />
      <span className="absolute top-4 left-4 px-4 py-1 bg-blue-500 text-white text-xs font-bold">{level}</span>
      <div className="flex justify-between text-gray-400 my-2">
        <p className="text-sm">Posted by: {posted_by}</p>
        <p className="text-sm">Updated: {last_updated_date}</p>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm">{description.slice(0, 100)}...</p>
    </Link>
  );
};

const BlogListing = ({ posts }) => {
  return posts ? (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <BlogItem key={post.uuid} {...post} />
      ))}
    </div>
  ) : (
    <h1 className="mx-auto text-center">No posts to load</h1>
  );
};

const BlogPagination = () => {
  const { loading, state, refetch } = useLoadItem(ResourceURL);

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

export default BlogPagination;
