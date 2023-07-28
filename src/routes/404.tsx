import { Backgroud } from "../components/backgroud";
import { i18n } from '../translates/i18n'

import notFoundImg from '../assets/404.png'

export function NotFound() {
    return (
        <Backgroud> 
            <div className="w-full min-h-[830px] md:min-h-[350px] lg:min-h-[950px] flex flex-col md:flex-row justify-center items-center gap-8">
                <div className="w-1/2 md:w-2/12">
                    <img src={notFoundImg} alt="NotFound"></img>
                </div>
                <h1 className="font-bold text-xl md:text-5xl">{i18n.t('notFound')}.</h1>
            </div>
        </Backgroud>
    )
}