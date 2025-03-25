export const ImageCard = () => {
    return (
        <div
            id="image-container"
            className="bg-white rounded-2xl w-[300px] h-[400px] flex-shrink-0 flex flex-col justify-center items-center border gap-5"
            style={{ boxShadow: "15px 15px 0 #E1BEE7" }}
        >
            <img src='./public/cheyanne.heic' alt='headshot' />
        </div>
    );
};