export function Card(props : {imgSrc: string, title: string, startDate: string, info: string}) {
    return (
        <div className="from-gray-600 to-gray-500 bg-gradient-to-l border rounded-xl w-full md:w-4/5 lg:w-2/5 h-96 flex justify-center">
            <div className="w-4/5">
                <div className="bg-white w-full h-2/5 flex justify-center md:items-center mt-5">
                    <img  src={props.imgSrc} alt={props.imgSrc} ></img>
                </div>
                <h1 className="mt-3 font-bold text-xl">{props.title}</h1>
                <p className="mt-4 text-md">{props.startDate}</p>
                <p className="mt-4 text-md">{props.info}</p>
            </div>
        </div>
    )
}