export function SkillBar(props: { imgSrc: string, percentage: number, info: string }) {
    return (
        <div className="w-full flex gap-2 justify-center md:items-center">
            <div className="w-[70px] flex justify-center md:items-center">
                <img src={props.imgSrc} alt={props.imgSrc} ></img>
            </div>
            <div className="w-full">
                <div className="bg-zinc-400 border-zinc-950 border-4 w-full h-6">
                    <div style={{ width: props.percentage + '%' }} className={"bg-gradient-to-r from-gray-800 to-gray-500 h-4"}></div>
                </div>
                <span>{props.info}</span>
            </div>
        </div>
    )
}