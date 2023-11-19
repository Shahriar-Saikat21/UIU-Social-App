import Pic from "../assets/DemoProfile.jpg";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import SearchForMsg from "./SearchForMsg";
import { useState } from "react";
import ChatBox from "./ChatBox";

const MessageList = () => {
  const [showSearchPeople, setShowSearchPeople] = useState(false);
  return (
    <div className="flex flex-col justify-start items-start md:w-[520px] w-full h-[300px] md:h-[100vh] border-r-2 border-gray-100 pt-[50px] pb-[10px]  gap-3 overflow-y-auto">
      <div className="flex justify-between items-center w-full h-auto pt-5 px-5">
        <div className="flex justify-start items-center w-full h-auto">
          <div className="w-[50px] h-[50px] md:w-[50px] rounded-full ring ring-[#FD7E14] mr-2 ">
            <img
              src={Pic}
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
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
        <ChatBox />
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
