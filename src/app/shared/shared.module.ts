import { environment } from './../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatMenuModule
    
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatSidenavModule,
    RouterModule,
    AngularFireAuthModule

  ],
  declarations: [

  ]
})
export class SharedModule { }
