import { Backgroud } from "../components/backgroud";
import { i18n } from '../translates/i18n'

export function ThankYou() {
    return (
        <Backgroud>
            <div className="w-full h-[900px] flex justify-center items-center">
                <h1 className="font-bold text-4xl">{i18n.t('contacts.thankYou')}</h1>
            </div>
        </Backgroud>
    );
}