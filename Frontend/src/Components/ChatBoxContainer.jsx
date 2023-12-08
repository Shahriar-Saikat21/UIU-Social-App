import ChatBox from "./ChatBox";
import {useQuery} from 'react-query';
import axios from 'axios';

const chatList = async () => {
    return axios.get(`http://localhost:3000/getChatList`, {
      withCredentials: true,
    });
  };
  

const ChatBoxContainer = () => {
    const {data, isLoading, isError, error} = useQuery('chatList',chatList);

    if(isLoading) return <div>Loading...</div>

    if(isError) return <div>{error.message}</div>

    return (
        <div>
            {data?.data?.chatList.map((item)=>{
                return <ChatBox key={item.msg_id} chat={item}/>
            })}
        </div>
    );
};

export default ChatBoxContainer;