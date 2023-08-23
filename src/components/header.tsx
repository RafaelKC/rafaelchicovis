import { i18n } from '../translates/i18n'

export function Header() {
    return (
        <div className="flex gap-4 p-3 pr-10 w-[auto] justify-end fixed bg-slate-100 rounded-xl">
            <a href="/rafaelchicovis" className="hover:text-zinc-500 cursor-pointer">{i18n.t('header.home')}</a>
            <a href="#experiences" className="hover:text-zinc-500 cursor-pointer">{i18n.t('header.expirience')}</a>
            <a href="#contact" className="hover:text-zinc-500 cursor-pointer">{i18n.t('header.contact')}</a>
        </div>
    )
}