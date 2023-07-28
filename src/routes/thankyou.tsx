import { Backgroud } from "../components/backgroud";
import { i18n } from '../translates/i18n'

export function ThankYou() {
    return (
        <Backgroud>
            <div className="w-full min-h-[830px] md:min-h-[350px] lg:min-h-[900px] flex justify-center items-center">
                <h1 className="font-bold text-xl lg:text-4xl">{i18n.t('contacts.thankYou')}</h1>
            </div>
        </Backgroud>
    );
}