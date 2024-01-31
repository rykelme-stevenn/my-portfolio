import { Component } from '@angular/core';

@Component({
  selector: 'app-my-lenguages',
  standalone: true,
  templateUrl: './my-lenguages.component.html',
  styleUrls: ['./my-lenguages.component.css']
})
export class MyLenguagesComponent {

  tecnologies = [
    {
      name: "HTML",
      source: "/src/assets/images/HTML.svg"
    },
    {
      name: "CSS",
      source: "/src/assets/images/CSS.svg"
    },

    {
      name: "Typescript",
      source: "/src/assets/images/Typescript.svg"
    },
    {
      name: "Angular",
      source: "/src/assets/images/Angular.svg"
    },
    {
      name: "React Native",
      source: "/src/assets/images/React Native.svg"
    },
    {
      name: "React",
      source: "/src/assets/images/React.svg"
    },
  ]
  
  devTools = [
    'Visual Studio Code',
    'NG Bootstrap',
    'PrimeNG',
    'Material UI',
    'Github',
    'GitLab',
    'Insomnia',
    'Postman',
    'Terminal',
    'Jira'
  ]

}
