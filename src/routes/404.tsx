import { Backgroud } from "../components/backgroud";

import notFoundImg from '../assets/404.png'

export function NotFound() {
    return (
        <Backgroud> 
            <div className="w-full h-[900px] flex justify-center items-center gap-8">
                <div className="w-2/12">
                    <img src={notFoundImg} alt="NotFound"></img>
                </div>
                <h1 className="font-bold text-5xl">Desculpe, página não encontrada.</h1>
            </div>
        </Backgroud>
    )
}