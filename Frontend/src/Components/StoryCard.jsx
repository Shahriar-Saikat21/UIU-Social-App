import Pic from "../assets/DemoProfile.jpg";
import DemoStoryPic from '../assets/DemoStoryPic.jpg'

const StoryCard = () => {
  return (
    <div className="flex flex-col justify-center items-start p-5 my-3 shadow-lg w-full md:w-1/2 h-auto bg-slate-100">
      <div className="flex justify-start items-center p-2 w-full h-auto">
        <img
          src={Pic}
          alt="pp"
          className="w-[60px] h-[70px] rounded-full border-2 border-[#FD7E14]"
        />
        <div className="ml-2 flex flex-col w-full justify-center items-start">
          <h2 className="text-xl font-primary font-semibold text-[#FD7E14]">
            Shahriar Imtiaz Saikat
          </h2>
          <h2 className="text-lg font-primary text-[#FD7E14]">
            011211036 - Student
          </h2>
          <h3 className="text-md font-primary">
            {" "}
            Posted at 21-11-2023 12:00 AM
          </h3>
          <button className="text-[#FD7E14] hover:text-gray-400">Delete</button>
        </div>
      </div>
      <h3 className="font-primary text-justify my-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet omnis
        beatae debitis, saepe rerum qui neque nobis dolores voluptatibus earum
        repudiandae culpa, officia, aperiam similique inventore? Nesciunt ab
        quia illo!
      </h3>
      <img src={DemoStoryPic} alt="story_pic"/>
    </div>
  );
};

export default StoryCard;
