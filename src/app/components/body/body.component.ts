import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PEOPLES, PRODUCTS} from '../../constants/img.constant';
import {ODD_TEXT, PAIR_TEXT} from '../../constants/string.constant';
import {SLIDER_DATA_ITEMS} from '../../constants/img.constant';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() height = 700;
  @Input() isFullScreen = false;
  public sliderImages = SLIDER_DATA_ITEMS;
  public finalHeight: string | number = 0;
  public products = PRODUCTS;
  public peoples = PEOPLES;
  public form: FormGroup;
  public data?: string;
  public showMessage = false;
  public dataMessage: string;
  public emailMessage: string;
  public emailMessageShow = false;
  public items = [];
  constructor( private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])]
    });
    this.items = [
      {
        title: '1 slide label',
        summery: '1 slide label summery',
        url: 'https://via.placeholder.com/200?text=first'
      },
      {
        title: '2 slide label',
        summery: '2 slide label summery',
        url: 'https://via.placeholder.com/200?text=second'
      },
      {
        title: '3 slide label',
        summery: '3 slide label summery',
        url: 'https://via.placeholder.com/200?text=third'
      }
    ];
  }

  ngOnInit(): void {
    this.shuffleArray();
  }

  save(): void {
    this.showMessage = false;
    if (this.form.get('email').value.length === 0) {
      return;
    } else {
      if (this.form.valid) {
        this.data = this.form.get('email').value;
        this.showMessage = true;
        if (this.data.length % 2 === 0) {
          this.dataMessage = `La cantidad de caracteres del email es ${PAIR_TEXT}: ${this.data.length}`;
        }
        if (this.data.length % 2 === 1) {
          this.dataMessage = `La cantidad de caracteres del email es ${ODD_TEXT}: ${this.data.length}`;
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
