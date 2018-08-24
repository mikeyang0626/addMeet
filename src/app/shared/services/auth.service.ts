import { AppUser } from './../model/appUser';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth, 
    private route: ActivatedRoute,
    private userService: UserService
    ) {
    this.user$ = afAuth.authState;
   }
   login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
   }
   logout(){
    this.afAuth.auth.signOut();
   }
   get appUser$(): Observable<AppUser>{
    return this.user$.pipe(
      switchMap(user =>  {
        if (user) return this.userService.get(user.uid).valueChanges();
        
        return of(null);
      })
    )
   }
}
