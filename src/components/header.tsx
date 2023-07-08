export function Header() {
    return (
        <div className="flex gap-4 p-3 pr-10 w-[auto] justify-end fixed bg-slate-100 rounded-xl">
            <a href="/" className="font-bold hover:text-zinc-500 cursor-pointer">Início</a>
            <a href="#experiences" className="hover:text-zinc-500 cursor-pointer">Experiências e conhecimentos</a>
            <a className="hover:text-zinc-500 cursor-pointer">Certificados</a>
            <a className="hover:text-zinc-500 cursor-pointer">Contatos</a>
        </div>
    )
}