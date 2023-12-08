import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const createMessage = async(data) => {
  const info = {
    userTwo_id: data,
  }
  try {
    const response = await axios.post('http://localhost:3000/messageBoxCreate',info,
     { withCredentials: true });
    return response.data;
  } catch (error) {
    throw new Error('Failed to create message box or network problems');
  }
};

const SearchResultBox = ({ searchResult, searchName, searchID, searchPic,searchUserID }) => {
  const navigate = useNavigate();
   const createmsgBox = async (data) => {
    const result = await createMessage(data);
    if(result.success){
      
      navigate("/messages");
    }else{
      alert(result.message);
      navigate("/messages");
    }
  console.log(data)
  };
  return (
    <div>
      {searchResult ? (
        <div className="flex justify-between items-center w-full h-auto md:border-b-2 md:bg-slate-100 rounded-xl p-2 cursor-pointer">
          <div className="flex justify-start items-center">
            <div className="w-[50px] h-[50px] md:w-[50px] rounded-full ring ring-[#FD7E14] mr-2">
              <img
                src={"http://localhost:3000/Image/" + searchPic}
                alt="pic"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col ">
              <h2 className="text-[#FD7E14] font-primary font-semibold text-lg ">
                {searchName}
              </h2>
              <h2 className="text-[#FD7E14] font-primary text-md ">
                ID : {searchID}
              </h2>
            </div>
          </div>
          <button className="bg-[#FD7E14] text-white font-primary  text-md px-5 py-2 rounded-xl"
          onClick={()=>createmsgBox(searchUserID)}>
            Send Message
          </button>
        </div>
      ) : (
        <div className="flex flex-col ">
          <h2 className="text-[#FD7E14] font-primary font-semibold text-lg ">
            No people found....
          </h2>
        </div>
      )}
    </div>
  );
};

export default SearchResultBox;
