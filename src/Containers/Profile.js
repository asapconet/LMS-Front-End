import React, { useEffect } from "react";
import axios from "axios";
import {
  // DeleteProfileURL,
  editProfileURL,
  showProfileURL,
} from "../API/BaseURL";
import Button1, { Button3 } from "../Components/button";
import { Link } from "react-router-dom";

export const Profile = () => {
  axios
    .get(showProfileURL, { uuid: "bb93aefa-d8f8-4886-ba5c-dedb5547b9f7" })
    .then((res) => {
      console.log(res.data);
    });

  const editUserHandler = () => {
    axios.put(editProfileURL).then((res) => {
      console.log(res.data);
    });
  };

  //   const deleteProfileHandler = () => {
  //     axios.delete(DeleteProfileURL).then((res) => {
  //       console.log(res);
  //     });
  //   };
  useEffect(() => {
    editUserHandler();
    // deleteProfileHandler();
  }, []);
  return (
    <div className="p-12">
      <div className="w-2/6 bg-white">
        <h1 className="capitalize border-b text-center py-2">...093</h1>
        <div>
          <ul className="font-medium p-2 text-xl">
            <li>FullName: ''</li>
            <li>Matric No: ''</li>
            <li>email: ''</li>
            {/* <li>UID: ''</li> */}
          </ul>
          <div className="m-3 p-3 text-center">
            <Button3 className="my-2" onClick={editUserHandler}>
              Edit Profile
            </Button3>
            {/* <Button3 onClick={deleteProfileHandler}>Delete Profile</Button3> */}
          </div>
        </div>
      </div>
      <Link to="/user/courses">
        <Button1>My courses</Button1>
      </Link>
    </div>
  );
};
