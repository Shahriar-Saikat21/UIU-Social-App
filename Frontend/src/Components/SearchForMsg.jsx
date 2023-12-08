import SearchResultBox from "./SearchResultBox";
import {useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const searchPeople = async (data) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/searchPeople?name=${data.search}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to search or network problems");
  }
};

const SearchForMsg = ({ isVisible, onClose }) => {
  const handle = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [showSearchPeople, setShowSearchPeople] = useState(false);
  const [searchResultName, setSearchResultName] = useState("");
  const [searchResultID, setSearchResultID] = useState("");
  const [searchResultPic, setSearchResultPic] = useState("");
  const [searchResult, setSearchResult] = useState(false);
  const [searchUserID, setSearchUserID] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const useSearch = async (data) => {
    const result = await searchPeople(data);
    if (result.success) {
      setShowSearchPeople(true);
      if(result.info.length>0){
        setSearchResultName(result.info[0].user_name);
        setSearchResultID(result.info[0].user_sid);
        setSearchResultPic(result.info[0].u_pic);
        setSearchUserID(result.info[0].user_id);
        setSearchResult(true);
      }else{
        setSearchResult(false);
      }
    } else {
      alert(result.message);
    }
    reset();
  };

  if (!isVisible) return null;

  return (
    <div
      id="wrapper"
      onClick={handle}
      className="bg-black fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="flex flex-col items-start justify-center bg-white rounded-lg w-[600px] p-6">
        <h1 className="text-xl text-[#FD7E14] font-semibold font-primary text-center mb-4">
          Search People
        </h1>
        <form className="w-full" noValidate onSubmit={handleSubmit(useSearch)}>
          <input
            type="text"
            placeholder="Enter User Name or ID..."
            className="border-2 border-[#FD7E14] rounded-md p-2 w-full focus:outline-none mb-3"
            {...register("search", {
              required: {
                value: true,
                message: "Enter User Name or ID to search",
              },
            })}
          />
          <p className=" mb-2 text-[#FD7E14] font-semibold">
            {errors.search?.message}
          </p>
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Search
            </button>
            <button className="btn inline-block" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
        <div className=" flex w-full h-auto flex-col">
          {showSearchPeople ? (
            <SearchResultBox
              searchName={searchResultName}
              searchID={searchResultID}
              searchPic={searchResultPic}
              searchResult={searchResult}
              searchUserID = {searchUserID}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SearchForMsg;
