import EditInfoModal from "./EditInfoModal";
import EditPicModal from "./EditPicModal";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const profileInfo = async () => {
  return axios.get("http://localhost:3000/profileInfo", {
    withCredentials: true,
  });
};

const Profile = () => {
  const [showEditInfo, setEditInfo] = useState(false);
  const [showEditPic, setEditPic] = useState(false);

  const { data, isLoading, isError, error } = useQuery(
    "ProfileInfo",
    profileInfo
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="flex flex-col w-full md:w-[500px] md:h-[100vh] h-[300px] justify-start items-start px-[50px] pt-[80px] gap-3">
      <div className="flex md:flex-col gap-3">
        <div className="w-32 md:w-[400px] md:h-[300px] h-32 rounded-md ring ring-[#FD7E14] ring-offset-2">
          <img
            src={"http://localhost:3000/Image/" + data?.data.info[0].u_pic}
            alt="profile-pic"
            className="h-full w-full object-cover rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl text-primary text-[#FD7E14] font-bold">
          {data?.data.info[0].user_name}
          </h1>
          <h2 className="text-2xl text-primary font-semibold text-[#FD7E14]">{data?.data.info[0].user_sid}{" "}</h2>
          <h2 className="text-2xl text-primary text-[#FD7E14]">{data?.data.info[0].user_designation}{" "}</h2>
          <h2 className="text-2xl text-primary text-[#FD7E14]">{data?.data.info[0].user_email}{" "}</h2>          
        </div>
      </div>
      <div>
        <Link
          to="#"
          className="text-lg text-[#4668e2] hover:text-gray-600 cursor-pointer mr-5"
          onClick={() => setEditInfo(true)}
        >
          Change Password
        </Link>
        <Link
          to="#"
          className="text-lg text-[#4668e2] hover:text-gray-600 cursor-pointer"
          onClick={() => setEditPic(true)}
        >
          Change Picture
        </Link>
      </div>
      <EditInfoModal
        isVisible={showEditInfo}
        onClose={() => {
          setEditInfo(false);
        }}
      />
      <EditPicModal
        isVisible={showEditPic}
        onClose={() => {
          setEditPic(false);
        }}
      />
    </div>
  );
};

export default Profile;
