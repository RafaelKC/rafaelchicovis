import { Contact } from './components/contact';
import { Experiences } from './components/experiences';
import { Header } from './components/header';

function App() {
  return (
    <div className="min-h-screen text-zinc-900 p-8 from-gray-900 to-gray-600 bg-gradient-to-r">
      <div className="bg-slate-100 w-[95%] mx-auto rounded-xl min-h-[900px] shadow-sm border border-black/20">
        <div className='flex justify-end'>
          <Header></Header>
        </div>

        <div>
          <div id="home" className='min-h-[1000px] flex flex-col justify-center p-11'>
            <h1 className='text-8xl font-bold'>Rafael Chicovis</h1>
            <span className='text-2xl'>Desenvolvedor FullStack JR</span>
          </div>

          <Experiences></Experiences>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;