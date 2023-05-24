import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/comps/menu/menu.component';

@Component({
  selector: 'ava-website-home-page',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {}
