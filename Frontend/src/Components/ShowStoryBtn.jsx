import { useState } from "react";

const ShowStoryBtn = () => {
  const [toggleA, setToggleA] = useState(true);
  const [toggleB, setToggleB] = useState(false);

  const showBtnA = () => {
    setToggleA(true);
    setToggleB(false);
  };
  const showBtnB = () => {
    setToggleA(false);
    setToggleB(true);
  };
  return (
    <div className="flex w-full justify-start gap-3 mt-2 mb-5">
      <button
        className={
          toggleA
            ? "font-primary text-lg text-[#FD7E14]"
            : "font-primary text-lg text-[#acaaaa]"
        }
        onClick={showBtnA}
      >
        All Stories
      </button>
      <button
        className={
          toggleB
            ? "font-primary text-lg text-[#FD7E14]"
            : "font-primary text-lg text-[#acaaaa]"
        }
        onClick={showBtnB}
      >
        My Stories
      </button>
    </div>
  );
};

export default ShowStoryBtn;
