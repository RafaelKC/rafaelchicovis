import { Backgroud } from './components/backgroud';
import { Contact } from './components/contact';
import { Experiences } from './components/experiences';
import { Header } from './components/header';

import { i18n } from './translates/i18n'

function App() {
  return (
    <Backgroud> 
        <div className='flex justify-end'>
          <Header></Header>
        </div>

        <div>
          <div id="home" className='min-h-[1000px] flex flex-col justify-center p-11'>
            <h1 className='text-8xl font-bold'>{i18n.t('title')}</h1>
            <span className='text-2xl'>{i18n.t('subtitle')}</span>
          </div>

          <Experiences></Experiences>
          <Contact></Contact>

          <div className='w-full flex justify-center mb-4'>
            <h2 className='font-bold'>{i18n.t('by')}</h2>
          </div>
        </div>
    </Backgroud> 
  );
}

export default App;