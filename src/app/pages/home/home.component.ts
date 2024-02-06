import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill} from '@ng-icons/bootstrap-icons'
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgIconComponent, MatTooltipModule],
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill })]
})
export class HomeComponent {
}
