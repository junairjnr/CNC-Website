export default function Progres({ progress = 50 }) {

    return (

        <div className="  rounded-md bg-green-200 mt-6 m-4">
            <div className="bg-green-700 text-center rounded-lg "
                style={{ width: `${progress}%`, color: progress < 5 ? "white" : "white" }} >
                {progress}
            </div>
        </div>

    )
}