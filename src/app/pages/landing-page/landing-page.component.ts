import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { WhoIAmComponent } from '../who-i-am/who-i-am.component';
import { ColaborateCompaniesComponent } from '../colaborate-companies/colaborate-companies.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [HomeComponent, WhoIAmComponent, ColaborateCompaniesComponent, FooterComponent, ContactComponent]
})
export class LandingPageComponent {
}
