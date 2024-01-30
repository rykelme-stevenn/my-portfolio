import { Component } from '@angular/core';
import { MyLenguagesComponent } from '../my-lenguages/my-lenguages.component';

@Component({
  selector: 'app-who-i-am',
  standalone: true,
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.css'],
  imports: [MyLenguagesComponent]
})
export class WhoIAmComponent {
  yearsAgo(){
    let year = new Date()
    return year.getFullYear() - 2021
  }
}
