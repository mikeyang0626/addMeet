import { AdminAuthGuardService } from './shared/services/admin-auth-guard.service';
import { AuthGuardService } from 'shared/services/auth-guard.service';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatPaginatorModule, MatSidenavModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AboutComponent } from './about/about.component';
import { AdminMeetingsComponent } from './admin-meetings/admin-meetings.component';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { UserService } from './shared/services/user.service';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyMeetingsComponent } from './my-meetings/my-meetings.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    AdminMeetingsComponent,
    ContactComponent,
    AboutComponent,
    AppointmentFormComponent,
    MyMeetingsComponent,
  
  ],
  imports: [
    BrowserModule,
    AdminModule,
    SharedModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FlexLayoutModule,

    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'login', component: LoginComponent },
      {path: 'about', component: AboutComponent , canActivate: [ AuthGuardService ] },
      {path: 'contact', component: ContactComponent },
      
      {path: 'my/meetings', component: MyMeetingsComponent, canActivate: [ AuthGuardService ] },

      {path: 'admin/meetings', component: AdminMeetingsComponent , canActivate: [ AuthGuardService, AdminAuthGuardService ] },
    ])
    
    
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
