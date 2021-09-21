import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() height = 700;
  @Input() isFullScreen = false;

  public finalHeight: string | number = 0;
  public currentPosition = 0;
  public products = [
    {
      photo: 'assets/images/PufiRainFoto.jpg',
      image: 'assets/images/PufiRainIcono.jpg',
      name: 'Puffi RAIN',
      description: 'Descripción del producto. Este es un texto simulado'
    },
    {
      photo: 'assets/images/PufiPuffFoto.jpg',
      image: 'assets/images/PufiPuffIcono.jpg',
      name: 'Puffi PUFF',
      description: 'Descripción del producto. Este es un texto simulado'
    },
    {
      photo: 'assets/images/PufiCart.jpg',
      image: 'assets/images/PufiCartIcono.jpg',
      name: 'Puffi CART',
      description: 'Descripción del producto. Este es un texto simulado'
    },
    {
      photo: 'assets/images/PufiNapFoto.jpg',
      image: 'assets/images/PufiNapIcono.jpg',
      name: 'Puffi NAP',
      description: 'Descripción del producto. Este es un texto simulado'
    }
  ];
  public peoples = [
    {
      photo: 'assets/images/PufiRainFoto.jpg',
    },
    {
      photo: 'assets/images/PufiPuffFoto.jpg',
    },
    {
      photo: 'assets/images/PufiCart.jpg',
    },
    {
      photo: 'assets/images/PufiNapFoto.jpg',
    },
    {
      photo: 'assets/images/PufiPuffFoto.jpg',
    },
    {
      photo: 'assets/images/PufiRainFoto.jpg',
    },
  ];
  public form: FormGroup;
  public data?: string;
  public showMessage1: boolean;
  public showMessage2: boolean;
  public dataMessage1: string;
  public dataMessage2: string;
  public emailMessage: string;
  public emailMessageShow: boolean;
  constructor( private formBuilder: FormBuilder) {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
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
    this.shuffleArray();
  }

  save(): void {
    this.showMessage1 = false;
    this.showMessage2 = false;
    if (this.form.get('email').value.length === 0) {
      return;
    } else {
      if (this.form.valid) {
        this.data = this.form.get('email').value;
        if (this.data.length % 2 === 0) {
          console.log(`Es par ${this.data.length}`);
          this.showMessage1 = true;
          this.dataMessage1 = `La cantidad de caracteres del email es par: ${this.data.length}`;
        }
        if (this.data.length % 2 === 1) {
          this.showMessage2 = true;
          this.dataMessage2 = `La cantidad de caracteres del email es impar: ${this.data.length}`;
        }
      }
      if (this.form.invalid) {
        this.emailMessageShow = true;
        this.emailMessage = 'El formulario es invalido';
      } else {
        this.emailMessageShow = true;
        this.emailMessage = 'El formulario es valido';
      }
      // this.form.reset({
      //   email: '',
      // });
    }
  }
  shuffleArray(): void{
    this.peoples.sort(() => Math.random() - 0.5);
  }
}
