'use client';
import { ReactElement } from "react";
import { TypeAnimation } from 'react-type-animation';

    export default function Experience(): ReactElement {  
        return(
        <div className="font-sans flex flex-col p-8 text-justify text-sm font-semibold text-retro-brown">
            <TypeAnimation
            sequence={[
                "Hello! My name is Márcio Sousa... and I'm a full-stack web developer...", 
                2000,
                () => {
                console.log('Sequence completed');
                },
            ]}
            wrapper="div"
            cursor={false}
            repeat={0}
            style={{ display: 'inline-block' }}
            />
            <ul className="pt-6">
                <li>🏆 6 Years of Experience</li>
                <li>⚔️ Frontend Mastery (Angular, NextJS, Ionic)</li>
                <li>🛡️ Backend Adventurer (AWS, NodeJS, PHP)</li>
                <li>📦 Database Handler (MySQL, DynamoDB)</li>
                <li>🛠️ IaC Nobleman (Terraform)</li>
                <li>🎯 Agile Warrior (Scrum, Kanban)</li>
            </ul>
        </div>
    )
     }
    
