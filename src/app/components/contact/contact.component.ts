import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // name = 'Edo';
  // email = 'edob@hotmail.com';
  // message = 'Tanfsfjdkgjldfgjdlfjgčldfčl dfgjdkfjkjh fdjhkdfj';
  name = '';
  email = '';
  message = '';
  @ViewChild('contactForm', { static: false }) contactForm: NgForm;
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Type': '*',
      'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Origin': 'http://localhost:4200/'
    })
  };
  isDisabled = false;
  responseMessage: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  onSendMessage(): void {

    if (this.contactForm.valid) {
      this.isDisabled = true;
      this.http.post('https://script.google.com/macros/s/AKfycbz2roxlR6Uf-Ntj_-F7aE66Ff86eFfvYA9fn813CjWZPHD3qzKvvaA5v7Z3AkFfeV8R/exec',
      `name: ${this.name} <br><br> email:  ${this.email} <br><br> message: <br> <i>${this.message}</i> <br>`,
        { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) })
        .subscribe(
          (response) => {

            // tslint:disable-next-line:no-string-literal
            if (response['result'] === 'success') {
              this.responseMessage = 'Thanks for the message! I\'ll get back to you soon!';
              Object.keys(this.contactForm.controls).forEach(key => {
                this.contactForm.controls[key].setValue('');
                this.contactForm.controls[key].markAsUntouched();
              });
            } else {
              this.responseMessage = 'Oops! Something went wrong... Reload the page and try again.';
            }
            window.alert(this.responseMessage);
            this.isDisabled = false;
            console.log(response);
          },
          (error) => {
            this.responseMessage = 'Oops! An error occurred... Reload the page and try again.';
            window.alert(this.responseMessage);
            console.log(error);
          }
        );
      // this.name = '', this.message = '', this.email = '';
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.controls[key].markAllAsTouched();
      });
    }
  }

}

