import React from "react";
import { LevelUrl } from "../API/BaseURL";
import "../Styles/Pages/CourseList.css";
import { useLoadItem } from "../utils/useLoadItem";
import { Loading } from "../Components/Loading";
import { Link } from "react-router-dom";

export const Categories = () => {
  const { loading, state, refetch } = useLoadItem(LevelUrl);


  return (
    <div>
      <div className="font-bold pt-5 text-4xl text-center">
        Select Level to view cources on in the DB
      </div>
      <div className="levels grid grid-cols-2 p-9 ">
        {state?.posts?.map((level) => {
          return (
            <Link
              to={`/levels/${level.name}`}
              className="flex justify-center items-center w-4/4 h-96 bg-black text-white rounded hover:shadow-xl m-4"
              key={level.uuid}
            >
              <div className="font-bold uppercase text-center text-4xl items-center">
                {level.name} level courses
              </div>
            </Link>
          );
        })}
        {loading
          ? <Loading />
          : <>{state.next && <button
            onClick={refetch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
          Load More
        </button>}</>}
      </div>
    </div>
  );
};
