import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  imports: [
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  private readonly router = inject(Router);
  
  clickOnMap() {
this.router.navigate(['/map']);
  }
  clickOnPeople() {
    this.router.navigate(['/users']);
  }
  clickOnDescription() {
    this.router.navigate(['/description']);
  }
}
