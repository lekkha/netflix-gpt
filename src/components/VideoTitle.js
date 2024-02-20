
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="py-6 text-sm w-4/12">{overview}</p>
            <div>
                <button className=" bg-white text-black py-2 px-8 rounded-lg text-sm hover:bg-opacity-80">Play</button>
                <button className="mx-2 bg-gray-500 py-2 px-7 rounded-lg bg-opacity-50 text-sm text-white">More Info</button>
            </div>

        </div>
    )
}

export default VideoTitle
