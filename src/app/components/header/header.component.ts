import { Component, OnInit } from '@angular/core';
import {getAttributeValue} from 'codelyzer/util/getAttributeValue';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public change: boolean;
  constructor() { this.change = true; }

  ngOnInit(): void {
  }
  menuButton(): void{
    const iconMenu = document.querySelector('#menu-icon');
    const menu = document.querySelector('#menu');
    iconMenu.addEventListener('click', (e) => {
      this.change = !this.change;
      menu.classList.toggle('active');
      document.body.classList.toggle('opacity');
    });
  }
}
