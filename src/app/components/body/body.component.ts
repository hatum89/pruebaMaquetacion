import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  public form: FormGroup;
  public data: string;
  public counter: number;
  public showMessage1: boolean;
  public showMessage2: boolean;
  public dataMessage1: string;
  public dataMessage2: string;
  public emailMessage: string;
  public emailMessageShow: boolean;
  constructor( private formBuilder: FormBuilder) {
    this.showMessage1 = false;
    this.showMessage2 = false;
    this.emailMessageShow = false;
    this.form = this.formBuilder.group({
     email: ['', Validators.compose([
       Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
     ])]
    });
  }

  ngOnInit(): void {
  }

  save(): void {
    if (this.form.valid){
      this.data = this.form.get('email').value;
      if ( this.data.length % 2 === 0){
        console.log(`Es par ${this.data.length}`);
        this.showMessage1 = true;
        this.dataMessage1 = `La cantidad de caracteres del mail es par: ${this.data.length}`;
      } else {
        this.showMessage2 = true;
        this.dataMessage2 = `La cantidad de caracteres del mail es impar ${this.data.length}`;
        console.log();
      }
    }
    if (this.form.invalid){
      this.emailMessageShow = true;
      this.emailMessage = 'El formulario es invalido';
      console.log(this.emailMessage);
    }
    this.form.reset('');
  }
}
