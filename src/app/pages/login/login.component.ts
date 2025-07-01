import { Component, ChangeDetectionStrategy, inject, Inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { appEnv } from '../../../environment/app.environment';
import LoginService from '../../services/login.service';
import { HomeLayoutComponent } from '../../home-layout/home-layout.component';
import { UsersComponent } from '../users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from 'express';


@Component({
  selector: 'app-login',
  imports: [
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  showPassword: boolean = false;
  
  constructor(private http: HttpClient) {}
  
  passwordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl(''),
  });
  
  async submit() {
    
    let params = new HttpParams();
    params = params.append('username', this.form.getRawValue().username);
    params = params.append('password', this.form.getRawValue().password);
    
    const service = new LoginService(this.http);
    service.login(params);

  }
}
