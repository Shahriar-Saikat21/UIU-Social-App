import image from "../assets/pagenotfound.png";


const NotFoundPage = () => {
    return (
        <div className="flex w-full h-[100vh] justify-center items-center">
            <img src={image} alt="Page not found....." />
        </div>
    );
};

export default NotFoundPage;