import { Card } from "./card";
import { SkillBar } from "./skillbar";

import korp from '../assets/korp.png';
import pucpr from '../assets/pucpr.jpeg';
import csharp from '../assets/csharp.svg';
import typescript from '../assets/typescript.svg';
import python from '../assets/python.svg';
import docker from '../assets/docker.svg';
import angular from '../assets/angular.png';
import jenkins from '../assets/jenkins.svg';
import jira from '../assets/jira.svg';

export function Experiences() {
    return (
<div id="experiences" className='min-h-[900px] max-w-full p-11 flex'>
    <div className="w-1/2">
      <div className='flex gap-16 md:items-center'>
        <Card
          imgSrc={korp}
          title='Desenvolvedor Web FullStack'
          info='13* meses de experiência total'
          startDate='Jun 2021 - atual'
        ></Card>
        <p className='w-2/5 text-justify'>
          Lorem mollit cillum pariatur mollit velit deserunt voluptate ea culpa eiusmod magna. Nulla ad nulla Lorem enim deserunt magna eiusmod. Dolor duis ipsum eiusmod pariatur fugiat nisi cillum aliqua mollit cupidatat.
        </p>
      </div>

      <div className='flex gap-16 md:items-center'>
        <p className='w-2/5 text-justify'>
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

    <div className='w-1/2 p-12 flex flex-col justify-center'>
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
      
        <div className="pt-10">
            <span>Outros:</span>
            <div className="flex gap-2">
                <div className="w-[70px] flex justify-center md:items-center">
                    <img src={jira} alt="jira" />
                </div>
                <div>
                    <img className="w-[70px] flex justify-center md:items-center" src={jenkins} alt="jenkins" />
                </div>
            </div>
        </div>
      </div>

    </div>

  </div>
    )
}