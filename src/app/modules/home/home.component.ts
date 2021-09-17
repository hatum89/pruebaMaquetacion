import { Component, OnInit } from '@angular/core';
import {SliderInterface} from '../../interfaces/slider-interface';
import {SLIDER_DATA_ITEMS} from '../../constants/img.constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sliderData: SliderInterface[] = SLIDER_DATA_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
