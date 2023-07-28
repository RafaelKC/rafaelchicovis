import linkedin from '../assets/linkdin.svg'
import email from '../assets/email50.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'

import { i18n } from '../translates/i18n'

export function Contact() {
    return (
        <div id="contact" className='min-h-[800px] md:min-h-[450px] lg:min-h-[900px] flex flex-col justify-center items-center'>
            <div className="flex flex-col items-center gap-8 w-full">
                <h1 className="text-4xl font-bold">{i18n.t('contacts.title')}</h1>
                <div className="w-11/12 lg:w-1/3">
                    <form className="flex flex-col items-start gap-3 w-full" action="https://api.staticforms.xyz/submit" method="post">
                        <input type="hidden" name="accessKey" value="e8957dc5-2573-4cec-b37b-908cb2dbe489"></input>
                        <input type="hidden" name="redirectTo" value="http://45.79.198.12/thank-you"></input>

                        <input className="w-full rounded-xl p-1 border-zinc-900 border-2" type="text" name="name" required placeholder={i18n.t('contacts.name')}></input>
                        <input className="w-full rounded-xl p-1 border-zinc-900 border-2" type="email" name="email" required placeholder={i18n.t('contacts.email')}></input>
                        <input className="w-full rounded-xl p-1 border-zinc-900 border-2" type="text" name="$company" placeholder={i18n.t('contacts.company')}></input>
                        <textarea className="w-full rounded-xl p-1 border-zinc-900 border-2 max-h-52" name="message" required placeholder={i18n.t('contacts.message')}></textarea>

                        <input className="w-1/3 rounded-xl p-1 bg-slate-200 border-zinc-900 border-2 cursor-pointer hover:bg-slate-400" type="submit" value={i18n.t('contacts.send')}/>
                    </form>
                </div>
            </div>

            <div className='mt-20 flex items-center gap-8'>
                <a href='https://www.linkedin.com/in/rafael-kaua-chicovis/'>
                    <div className='w-14 flex justify-center items-center'>
                        <img src={linkedin} alt="LinkedIn" ></img>
                    </div>
                </a>

                <a href='mailto:contato.rafael.chicovis@gmail.com'>
                    <div className='w-14 flex justify-center items-center'>
                        <img src={email} alt="Email" ></img>
                    </div>
                </a>

                <a href='https://github.com/RafaelKC'>
                    <div className='w-11 flex justify-center md:items-center'>
                        <img src={github} alt="GitHub" ></img>
                    </div>
                </a>

                <a href='https://t.me/RafaelChicovis'>
                    <div className='w-11 flex justify-center md:items-center'>
                        <img src={telegram} alt="Telegram" ></img>
                    </div>
                </a>
            </div>
        </div>
    )
}