import { Component } from '@angular/core';
import { ToolBarComponent } from '../components/tool-bar/tool-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  imports: [ToolBarComponent, RouterOutlet],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class HomeLayoutComponent {}
