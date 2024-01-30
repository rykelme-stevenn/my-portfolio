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
      source: "../../../assets/images/HTML.svg"
    },
    {
      name: "CSS",
      source: "../../../assets/images/CSS.svg"
    },

    {
      name: "Typescript",
      source: "../../../assets/images/Typescript.svg"
    },
    {
      name: "Angular",
      source: "../../../assets/images/Angular.svg"
    },
    {
      name: "React Native",
      source: "../../../assets/images/React Native.svg"
    },
    {
      name: "React",
      source: "../../../assets/images/React.svg"
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
