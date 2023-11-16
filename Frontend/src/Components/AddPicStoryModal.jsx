const AddPicStoryModal = ({ isVisible, onClose }) => {
    const handle = (e) => {
        if(e.target.id === "wrapper")
            onClose();
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
          Add a picture
        </h1>
        <form className="w-full">
          <input
            type="file"
            placeholder="Upload a picture"
            accept=".png, .jpg, .jpeg"
            className="border-2 border-[#FD7E14] rounded-md p-2 w-full focus:outline-none"
          />
          <div className="flex justify-center items-center gap-2">
            <button type="submit" className="btn inline-block">
              Add
            </button>
            <button className="btn inline-block" onClick={() => onClose()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPicStoryModal;

