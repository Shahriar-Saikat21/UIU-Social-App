import StoryMake from "../Components/StoryMake";
import StoryCard from "../Components/StoryCard";

const AdminPostPage = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] justify-start items-center md:max-w-[1460px] m-auto pt-[70px]">
      <div className="flex flex-col w-full md:w-1/2 h-auto justify-start items-start p-5">
        <h1 className="text-2xl font-primary text-[#FD7E14] font-bold mb-5 mt-5 md:mt-2 text-center">
          Admin Post Section
        </h1>
        <StoryMake />
      </div>
      <div className="flex flex-col w-full h-auto justify-center items-center p-5">
      <StoryCard />
      </div>
      
    </div>
  );
};

export default AdminPostPage;
