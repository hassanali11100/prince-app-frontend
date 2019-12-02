import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import { UserService } from './user.service';
import { GoogleApiService } from 'ng-gapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private userService: UserService,
    private gapiService: GoogleApiService) {
      // First make sure gapi is loaded can be in AppInitilizer
      this.gapiService.onLoad().subscribe();
    }

  title = 'prince-app';

  public isLoggedIn(): boolean {
    return this.userService.isUserSignedIn();
  }

  public signIn() {
    this.userService.signIn();
  }

  public signOut() {
    this.userService.signOut();
  }
}
