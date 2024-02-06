import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Component } from '@angular/core';
import { EmailService } from '../../services/email-provide.service';
import {bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill} from '@ng-icons/bootstrap-icons'
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [NgIconComponent, MatTooltipModule],
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill })]
})
export class FooterComponent {
  constructor(private emailService: EmailService) { }
  openEmail(): void {
    const destinatario = 'rykelmesteven@outlook.com';
    const assunto = 'Assunto do E-mail';
    const corpo = 'Corpo do E-mail';
    this.emailService.enviarEmail(destinatario, assunto, corpo);
  }
}
