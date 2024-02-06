import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapChatLeftTextFill } from '@ng-icons/bootstrap-icons'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'
import { bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill, bootstrapXSquareFill } from '@ng-icons/bootstrap-icons'
import { MatTooltipModule } from '@angular/material/tooltip';
import { EmailService } from '../../services/email-provide.service';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrl: 'contact.component.css',
  standalone: true,
  imports: [MatButtonModule, NgIconComponent, HttpClientModule],
  viewProviders: [provideIcons({ bootstrapChatLeftTextFill, bootstrapGithub })],
  providers: [EmailService]
})
export class ContactComponent implements OnInit {

  isMobile: boolean = false;
  
  constructor(public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(){
    this.breakpointObserver
    .observe([Breakpoints.Handset])
    .subscribe((result) => {
      this.isMobile = result.matches;
    });

    console.log(this.isMobile)
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
      width: this.isMobile ? '95%' : '70%'
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'modal.component.html',
  standalone: true,
  imports: [MatDialogTitle,
    HttpClientModule,
    MatDialogContent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgIconComponent,
    MatTooltipModule,
    MatSnackBarModule],
  viewProviders: [provideIcons({ bootstrapGithub, bootstrapLinkedin, bootstrapEnvelopeAtFill, bootstrapXSquareFill })],
  providers: [EmailService]
})
export class DialogDataExampleDialog implements OnInit{

  isMobile: boolean = false;
  name = ''
  email = ""
  subject = ""
  message = ""
  loading = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private emailService: EmailService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.reset()

    this.breakpointObserver
    .observe([Breakpoints.Handset])
    .subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  openEmail(): void {
    const destinatario = 'rykelmesteven@outlook.com';
    const assunto = 'Assunto do E-mail';
    const corpo = 'Corpo do E-mail';
    this.emailService.enviarEmail(destinatario, assunto, corpo);
  }

  async enviteEmail() {
    let form = {
      "name": this.name,
      "email": this.email,
      "subject": this.subject,
      "message": this.message
    }
    this.loading = true;

    if (this.isValid()) {
      await this.emailService.enviarEmailOutlook(form).subscribe((response) => {
        this.loading = false;
        this.sent()
      })
    } else {
      this.snackMessage('Preencha os campos obrigatórios', "Fechar")
    }

  }

  sent() {
    this.reset()
    this.snackMessage('Mensagem enviada com sucesso', "Fechar")
    this.close()
  }

  snackMessage(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  isValid() {
    return (
      this.name !== '' &&
      this.message !== '' &&
      this.name &&
      this.message 
    )
  }

  close() {
    this.dialog.closeAll()
  }

  reset(){
    this.name = ''
    this.email = ""
    this.subject = ""
    this.message = ""
    this.loading = false
  }
}