import { AiOutlineUsergroupAdd } from "react-icons/ai";
import SearchForMsg from "./SearchForMsg";
import { useState} from "react";
import ChatBoxContainer from "./ChatBoxContainer";
import {useQuery} from 'react-query';
import axios from 'axios';

const profileInfo = async () => {
  return axios.get("http://localhost:3000/profileInfo", {
    withCredentials: true,
  });
};

const MessageList = () => {
  const [showSearchPeople, setShowSearchPeople] = useState(false);

  const {data, isLoading, isError, error} = useQuery('profileInfo',profileInfo);

  return (
    <div className="flex flex-col justify-start items-start md:w-[520px] w-full h-[300px] md:h-[100vh] border-r-2 border-gray-100 pt-[50px] pb-[10px]  gap-3 overflow-y-auto">
      <div className="flex justify-between items-center w-full h-auto pt-5 px-5">
        <div className="flex justify-start items-center w-full h-auto">
          <div className="w-[50px] h-[50px] md:w-[50px] rounded-full ring ring-[#FD7E14] mr-2 ">
            <img
              src={"http://localhost:3000/Image/" + data?.data.info[0].u_pic}
              alt="pic"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-[#FD7E14] font-primary font-bold md:text-2xl text-xl ">
            Message
          </h2>
        </div>
        <div className="flex gap-2" onClick={() => setShowSearchPeople(true)}>
          <AiOutlineUsergroupAdd className="text-[#FD7E14] text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="flex md:flex-col w-full p-5 gap-3 overflow-x-auto">
        <ChatBoxContainer />
      </div>
      <SearchForMsg
        isVisible={showSearchPeople}
        onClose={() => {
          setShowSearchPeople(false);
        }}
      />
    </div>
  );
};

export default MessageList;
