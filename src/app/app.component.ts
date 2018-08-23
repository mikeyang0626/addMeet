import { Router } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';
import { Component } from '@angular/core';
import { UserService } from 'shared/services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'addMeetings';
  constructor(private userService: UserService, private auth: AuthService, router: Router){
    auth.user$.subscribe( user => {
      if (user){
        this.userService.save(user);
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    }
    )
  }
}
