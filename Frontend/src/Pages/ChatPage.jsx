import MessageList from "../Components/MessageList";
import MessageBody from "../Components/MessageBody";

const ChatPage = () => {
    return (
        <div className="flex md:flex-row flex-col h-[100vh] justify-start items-start md:max-w-[1460px] m-auto w-full">
            <MessageList />
            <MessageBody />
        </div>
    );
};

export default ChatPage;