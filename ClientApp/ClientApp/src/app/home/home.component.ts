import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {


  message: string = "";

  constructor(public oidcSecurityService: OidcSecurityService) { }

  ngOnInit() {
    this.oidcSecurityService.checkAuth()
      .subscribe((auth) => console.log('is authenticated', auth));
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }


  settings = {
    authority: "https://localhost:5001",
    client_id: "client_id_angular",
    response_type: "code",
    scope: "ResourceScope openid profile",

    redirect_url: "https://localhost:4001/auth-callback"
  }

}
