import { Component } from '@angular/core';
import {SliderInterface} from './interfaces/slider-interface';
import {SLIDER_DATA_ITEMS} from './constants/img.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sliderData: SliderInterface[] = SLIDER_DATA_ITEMS;
  title = 'pruebaFrontPufi';
}
