import Pic from "../assets/DemoPic2.jpg";
import {useQuery} from 'react-query';
import axios from 'axios';
import {useEffect,useState} from 'react';




const ChatBox = ({chat}) => {
  const userId = sessionStorage.getItem("id");
  const [myID, setMyID] = useState(userId);
  const [msgID, setMsgID] = useState(chat.msg_id);
  const [pic, setPic] = useState('');
  const [name, setName] = useState('');
  
  useEffect(()=>{
    async function chatListDetail(myID,msgID){
      const result = await axios.get(`http://localhost:3000/getChatListUser?id=${myID}&msg_id=${msgID}`, {
          withCredentials: true,
      });
      if(result.data.success){
        setPic(result.data.chatId[0].u_pic);
        setName(result.data.chatId[0].user_name);
      }
    }
    chatListDetail(myID,msgID);
  },[myID,msgID]);
    return (
        <div className="flex justify-start items-center w-full h-auto md:border-b-2 md:bg-slate-100 rounded-xl p-2 cursor-pointer" onClick={()=>{
          console.log(chat.msg_id);
      }}>
          <div className="w-[50px] h-[50px] md:w-[50px] rounded-full ring ring-[#FD7E14] mr-2">
            <img
              src={"http://localhost:3000/Image/" + pic}
              alt="pic"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col ">
            <h2 className="text-[#FD7E14] font-primary font-semibold text-lg hidden md:block">
              {name}
            </h2>
          </div>
        </div>
    );
};

export default ChatBox;