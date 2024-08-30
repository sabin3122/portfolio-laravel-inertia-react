import React from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Aboutme from '@/Components/Aboutme';
import Projects from '@/Components/Projects';
import Contacts from '@/Components/Contacts';
import TypeWriter from '@/Components/TypeWriter';



export default function(){
    const hats = [
        {
          prep: 'I am a',
          suffix: 'Electronics Engineer'
        },
        {
          prep: 'I am a',
          suffix: 'Web developer'
        },
        {
          prep: 'I am a',
          suffix: 'Freelancer'
        },
      ];

    return(
        <div id='Home'>
        <MainLayout>
        <TypeWriter hats={hats}/>
        <Aboutme />
        <Projects />
        <Contacts />
        </MainLayout>
       
        </div>
        );
}