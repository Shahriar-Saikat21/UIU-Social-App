import StoryMake from "./StoryMake";
import ShowStoryBtn from "./ShowStoryBtn";


const StorySection = () => {
    
    return (
        <div className="flex flex-col justify-center items-start w-full">
            <h1 className="text-3xl font-primary text-[#FD7E14] font-bold mb-5 mt-5 md:mt-2">
              Story Board
            </h1>
            <StoryMake />
            <ShowStoryBtn />
            
        </div>
    );
};

export default StorySection;