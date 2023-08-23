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

import { i18n } from '../translates/i18n'

export function Experiences() {
    return (
<div id="experiences" className='min-h-[900px] max-w-full p-11 flex flex-col md:flex-row'>
    <div className="md:w-1/2">
      <div className='flex flex-col md:flex-row sm:gap-5 lg:gap-16 items-center'>
        <Card
          imgSrc={korp}
          title={i18n.t('cards.korp.title')}
          info={i18n.t('cards.korp.date')}
          startDate={i18n.t('cards.korp.obs')}
        ></Card>
        <p className='sm:w-full md:w-4/5 lg:w-2/5 text-justify'>
          {i18n.t('cards.korp.more')}
        </p>
      </div>

      <div className='flex mt-6 lg:mt-3 flex-col-reverse lg:flex-row md:gap-5 lg:gap-16 items-center'>
        <p className='sm:w-full md:w-4/5 lg:w-2/5 text-justify'>
          {i18n.t('cards.pucpr.more')}
        </p>
        <Card
          imgSrc={pucpr}
          title={i18n.t('cards.pucpr.title')}
          info={i18n.t('cards.pucpr.date')}
          startDate={i18n.t('cards.pucpr.obs')}
        ></Card>
      </div>
    </div>

    <div className='md:w-1/2 pt-12 md:pt-0 md:p-12 flex flex-col justify-center'>
      <div className='flex flex-col gap-5 md:gap-11'>
        <SkillBar
          percentage={70}
          imgSrc={typescript}
          info={i18n.t('languages.workAndStudy')}
        ></SkillBar>

        <SkillBar
          percentage={60}
          imgSrc={csharp}
          info={i18n.t('languages.work')}
        ></SkillBar>

        <SkillBar
          percentage={55.5}
          imgSrc={angular}
          info={i18n.t('languages.work')}
        ></SkillBar>

        <SkillBar
          percentage={44.5}
          imgSrc={docker}
          info={i18n.t('languages.workAndStudy')}
        ></SkillBar>

        <SkillBar
          percentage={30}
          imgSrc={python}
          info={i18n.t('languages.study')}
        ></SkillBar>
      
        <div className="pt-5 md:pt-10">
            <span>{i18n.t('others')}</span>
            <div className="flex gap-2">
                <div className="w-[70px] flex justify-center items-center">
                    <img src={jira} alt="jira" />
                </div>
                <div>
                    <img className="w-[70px] flex justify-center items-center" src={jenkins} alt="jenkins" />
                </div>
            </div>
        </div>
      </div>

    </div>

  </div>
    )
}