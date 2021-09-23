import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CredentialsService } from 'src/app/services/credentials.service';
import { LoginComponent } from '../../components/login/login.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService: NgbModal,private credentialsService:CredentialsService,private router:Router) { }
  isLoggedIn;
  username:string;
  ngOnInit(): void {
    this.credentialsService.getLoggedIn.subscribe(name => this.getDetail());
  }
  getDetail(){
    this.isLoggedIn = this.credentialsService.isLoggedIn();
    if(this.isLoggedIn)
    {
      let userDetail = JSON.parse(localStorage.getItem('userDetail'));
      this.username = userDetail.userName;
    }
    
  }
  login(){
    this.modalService.open(LoginComponent, {ariaLabelledBy: 'modal-basic-title',backdropClass: 'light-blue-backdrop'}).result.then((result) => {
    }, (reason) => {
    });
  }
  logout(){
    this.credentialsService.removeCredentials();
    this.router.navigate(['home']);
  }

}
