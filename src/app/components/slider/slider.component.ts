import {Component, Input, OnInit} from '@angular/core';
import {SliderInterface} from '../../interfaces/slider-interface';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() height = 700;
  @Input() isFullScreen = false;
  @Input() items: SliderInterface[] = [];

  public finalHeight: string | number = 0;
  public currentPosition = 0;
  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit(): void {
    this.items.map( ( i, index ) => {
      i.id = index;
      i.marginLeft = 0;
    });
  }
  setCurrentPosition(position: number): void {
    this.currentPosition = position;
    this.items.find(i => i.id === 0).marginLeft = -100 * position;
  }
  setNext(): void{
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = nextPosition;
  }
  setBack(): void {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition = backPosition;

  }
}
