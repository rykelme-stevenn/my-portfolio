import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  url = 'https://weary-boa-garb.cyclic.app/send'

  constructor(private httpClient: HttpClient) { }

  enviarEmail(destinatario: string, assunto: string, corpo: string): void {
    const link = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    window.location.href = link;
  }

  enviarEmailOutlook(data: any) {

    console.log(data, this.url)
    return this.httpClient.post(this.url, data)
  }
}