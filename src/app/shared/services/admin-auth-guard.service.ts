
import { UserService } from 'shared/services/user.service';
import { AuthService } from 'shared/services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { switchMap , map } from 'rxjs/operators'; 
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router, private userService: UserService) { }

  canActivate(): Observable<boolean>{
     return this.auth.user$.pipe(
      switchMap(user =>  this.userService.get(user.uid).valueChanges() ),
      map( appUser => appUser.isAdmin)
    )
    
  }
}
