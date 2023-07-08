import { Card } from './components/card';
import { Header } from './components/header';
import { SkillBar } from './components/skillbar';

import korp from './assets/korp.png';
import pucpr from './assets/pucpr.jpeg';
import csharp from './assets/csharp.svg';
import typescript from './assets/typescript.svg';
import python from './assets/python.svg';
import docker from './assets/docker.svg';
import angular from './assets/angular.png';

function App() {
  return (
    <div className="min-h-screen text-zinc-900 p-8 from-gray-900 to-gray-600 bg-gradient-to-r">
      <div className="bg-slate-100 w-[95%] mx-auto rounded-xl min-h-[900px] shadow-sm border border-black/20">
        <div className='flex justify-end'>
          <Header></Header>
        </div>

        <div>
          <div id="home" className='min-h-[900px] flex flex-col justify-center p-11'>
            <h1 className='text-8xl font-bold'>Rafael Chicovis</h1>
            <span className='text-2xl'>Desenvolvedor FullStack JR</span>
          </div>

          <div id="experiences" className='min-h-[900px] p-11 flex gap-16'>
            <div>
              <div className='flex gap-16 md:items-center'>
                <Card
                  imgSrc={korp}
                  title='Desenvolvedor Web FullStack'
                  info='13* meses de experiência total'
                  startDate='Jun 2021 - atual'
                ></Card>
                <p className='w-96 text-justify'>
                  Lorem mollit cillum pariatur mollit velit deserunt voluptate ea culpa eiusmod magna. Nulla ad nulla Lorem enim deserunt magna eiusmod. Dolor duis ipsum eiusmod pariatur fugiat nisi cillum aliqua mollit cupidatat.
                </p>
              </div>

              <div className='flex gap-16 md:items-center'>
                <p className='w-96 text-justify'>
                  Lorem mollit cillum pariatur mollit velit deserunt voluptate ea culpa eiusmod magna. Nulla ad nulla Lorem enim deserunt magna eiusmod. Dolor duis ipsum eiusmod pariatur fugiat nisi cillum aliqua mollit cupidatat.
                </p>
                <Card
                  imgSrc={pucpr}
                  title='Engenharia de Software'
                  info='7 semestres para conclusão'
                  startDate='Abril 2023 - atual'
                ></Card>
              </div>
            </div>

            <div className='w-[100%] p-12 flex justify-center'>
              <div className='flex flex-col gap-11'>
                <SkillBar
                  percentage={70}
                  imgSrc={typescript}
                  info='Trabalho e estudo'
                ></SkillBar>

                <SkillBar
                  percentage={60}
                  imgSrc={csharp}
                  info='Trabalho'
                ></SkillBar>

                <SkillBar
                  percentage={55.5}
                  imgSrc={angular}
                  info='Trabalho'
                ></SkillBar>

                <SkillBar
                  percentage={44.5}
                  imgSrc={docker}
                  info='Trabalho e estudo'
                ></SkillBar>

                <SkillBar
                  percentage={30}
                  imgSrc={python}
                  info='Estudo'
                ></SkillBar>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;