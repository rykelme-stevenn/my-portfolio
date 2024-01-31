import { Component } from '@angular/core';

@Component({
  selector: 'app-colaborate-companies',
  standalone: true,
  templateUrl: './colaborate-companies.component.html',
  styleUrls: ['./colaborate-companies.component.css']
})
export class ColaborateCompaniesComponent {
  companies = [
    {
      name: 'Linx',
      source: '/src/assets/images/Linx.jpeg'
    },
    {
      name: 'UseCash',
      source: '/src/assets/images/UseCash.jpeg'
    },
    {
      name: 'Select',
      source: '/src/assets/images/company.svg'
    },
    {
      name: 'Connect',
      source: '/src/assets/images/Connect Parts.jpeg'
    },

  ]
  detectar_mobile() { 
    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){
       return true;
     }
    else {
       return false;
     }
   }
}
