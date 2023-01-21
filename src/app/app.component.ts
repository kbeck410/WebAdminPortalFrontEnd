import { Component, DoCheck } from '@angular/core';
import { AuthenticationService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {

  loginSuccess = false;
  canIBeLoggedIn: false | undefined;
  isLoggedIn = false;
  isUserLoggedIn: boolean | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);

  }

  ngDoCheck() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  // onclick(isLoggedIn: any) return: any;


  handleLogout() {
    this.authenticationService.logout();
  }

  //  openNav(){
  //   document.getElementById("mySidenav").style.width = "250px";
  // }
  
  //  closeNav() {
  //   document.getElementById("mySidenav").style.width = "0";
  // }
  


  title = 'Web Report Portal';
}