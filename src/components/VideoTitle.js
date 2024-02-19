
const VideoTitle = ({ title, overview }) => {
    return (
        <div className="pt-36 px-12">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="py-6 text-base w-6/12">{overview}</p>
            <div>
                <button className=" bg-zinc-900 text-white py-2 px-8 rounded-lg">▶ Play</button>
                <button className="mx-2 bg-zinc-900 text-white py-2 px-7 rounded-lg">More Info</button>
            </div>

        </div>
    )
}

export default VideoTitle
