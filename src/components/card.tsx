import { title } from "process";

export function Card(props : {imgSrc: string, title: string, startDate: string, info: string}) {
    return (
        <div className="from-gray-600 to-gray-500 bg-gradient-to-l border rounded-xl w-[300px] h-[400px] flex justify-center">
            <div className="w-[250px]">
                <div className="bg-white w-[250px] h-[150px] flex justify-center md:items-center mt-5">
                    <img  src={props.imgSrc} alt={props.imgSrc} ></img>
                </div>
                <h1 className="mt-3 font-bold text-xl">{props.title}</h1>
                <p className="mt-4 text-md">{props.startDate}</p>
                <p className="mt-4 text-md">{props.info}</p>
            </div>
        </div>
    )
}