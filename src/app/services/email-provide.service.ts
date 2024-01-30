import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  enviarEmail(destinatario: string, assunto: string, corpo: string): void {
    const link = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    window.location.href = link;
  }
}