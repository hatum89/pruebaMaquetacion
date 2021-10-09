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

  part1(): void{
    document.getElementById('part1').scrollIntoView({behavior: 'smooth'});
  }

  part2(): void{
    document.getElementById('part2').scrollIntoView({behavior: 'smooth'});

  }

  part3(): void {
    document.getElementById('part3').scrollIntoView({behavior: 'smooth'});

  }
}
