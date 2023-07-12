import linkedin from '../assets/linkdin.svg'
import email from '../assets/email50.png'
import github from '../assets/github.png'
import telegram from '../assets/telegram.png'

export function Contact() {
    return (
        <div id="contact" className='min-h-[900px] flex flex-col justify-center md:items-center'>
            <div className="flex flex-col md:items-center gap-8 w-full">
                <h1 className="text-4xl font-bold">Entre em contato</h1>
                <div className="w-1/3">
                    <form className="flex flex-col md:items-start gap-3 w-full" action="https://api.staticforms.xyz/submit" method="post">
                        <input type="hidden" name="accessKey" value="e8957dc5-2573-4cec-b37b-908cb2dbe489"></input>
                        <input type="hidden" name="redirectTo" value="http://localhost:3000/thank-you"></input>

                        <input className="w-full rounded-xl p-1 border-zinc-900 border-2" type="text" name="name" required placeholder="Nome"></input>
                        <input className="w-full rounded-xl p-1 border-zinc-900 border-2" type="email" name="email" required placeholder="Email"></input>
                        <input className="w-full rounded-xl p-1 border-zinc-900 border-2" type="text" name="$company" placeholder="Empresa"></input>
                        <textarea className="w-full rounded-xl p-1 border-zinc-900 border-2 max-h-52" name="message" required placeholder="Menssagem"></textarea>

                        <input className="rounded-xl p-1 bg-slate-200 border-zinc-900 border-2 cursor-pointer hover:bg-slate-400" type="submit" value="Enviar" />
                    </form>
                </div>
            </div>

            <div className='mt-20 flex md:items-center gap-8'>
                <a href='https://www.linkedin.com/in/rafael-kaua-chicovis/'>
                    <div className='w-14 flex justify-center md:items-center'>
                        <img src={linkedin} alt="LinkedIn" ></img>
                    </div>
                </a>

                <a href='mailto:contato.rafael.chicovis@gmail.com'>
                    <div className='w-14 flex justify-center md:items-center'>
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