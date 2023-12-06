import StoryCard from "./StoryCard";
import axios from 'axios';
import {useQuery} from 'react-query';


const showALLStory = async () => {
  return axios.get("http://localhost:3000/showAllStory",{
    withCredentials: true,
  });
};

const StoryCatShow = () => {
    const { data, isLoading, isError, error } = useQuery(
    "allStory",
    showALLStory
  );

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (isError) {
    return <div>Error Occured: {error.message}</div>;
  }
    return (
        <div>
            {data?.data?.story.map((item)=>{
                return (<div key={item.s_id} className="flex flex-col justify-center items-start p-5 my-3 shadow-lg w-full h-auto bg-slate-100">
                <div className="flex justify-start items-center p-2 w-full h-auto">
                  <img
                    src={"http://localhost:3000/Image/" + item.u_pic}
                    alt="pp"
                    className="w-[60px] h-[70px] rounded-full border-2 border-[#FD7E14]"
                  />
                  <div className="ml-2 flex flex-col w-full justify-center items-start">
                    <h2 className="text-xl font-primary font-semibold text-[#FD7E14]">
                      {item.user_name}
                    </h2>
                    <h2 className="text-lg font-primary text-[#FD7E14]">
                    {item.user_sid} - {item.user_designation}
                    </h2>
                    <h3 className="text-md font-primary">
                      {" "}
                      Posted at {item.s_time}
                    </h3>
                  </div>
                </div>
                <h3 className="font-primary text-justify my-3">
                  {item.s_body}
                </h3>
                {(item.s_pic !== null)? <img src={"http://localhost:3000/Image/" + item.s_pic} alt="story_pic"/> : ""}   
              </div>);
            })}
        </div>
    );
};

export default StoryCatShow;