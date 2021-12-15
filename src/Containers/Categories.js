import React, { useState, useEffect } from "react";
import { LevelUrl } from "../API/BaseURL";
import "../Styles/Pages/CourseList.css";
import axios from "axios";

export const Categories = () => {
  const [levels, setLevels] = useState([]);

  const getLevels = () => {
    axios.get(LevelUrl).then((res) => {
      console.log(res.data.results);
      let levels = res.data.results;
      setLevels(levels);
    });
  };

  useEffect(() => {
    getLevels();
  }, []);

  return (
    <div>
      <div className="font-bold pt-5 text-4xl text-center">
        Select Level to view cources on in the DB
      </div>
      <div className="levels grid grid-cols-2 p-9 border-b">
        {levels.map((e) => {
          return (
            <a
              href="/courses"
              className="flex justify-center items-center w-4/4 h-96 bg-white text-black rounded hover:shadow-xl m-4"
              key={e.uuid}
            >
              <div className="font-bold uppercase text-center text-4xl items-center">
                Explore<p>{e.name}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
