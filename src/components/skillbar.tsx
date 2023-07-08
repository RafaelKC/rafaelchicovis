export function SkillBar(props: { imgSrc: string, percentage: number, info: string }) {
    return (
        <div className="flex gap-2 justify-center md:items-center">
            <div className="w-[70px] flex justify-center md:items-center">
                <img src={props.imgSrc} alt={props.imgSrc} ></img>
            </div>
            <div>
                <div className="bg-zinc-400 border-zinc-950 border-4 w-80 h-6">
                    <div className={"bg-gradient-to-r from-gray-800 to-gray-500 h-4 w-"+(80*(props.percentage/100)).toFixed()}></div>
                </div>
                <span>{props.info}</span>
            </div>
        </div>
    )
}