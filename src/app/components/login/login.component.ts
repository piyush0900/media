import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { errorMessage, USER } from 'src/app/app.constant';
import { CredentialsService } from 'src/app/services/credentials.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  userList:any = USER;
  errorMessage = errorMessage.REQUIRED;
  emailValidator:any;
  constructor(public activeModal: NgbActiveModal,private credentialsService:CredentialsService,private toastr: ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.emailValidator = {
      pettern:'^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
      message:errorMessage.EMAIL_ADDRESS
    }
  }
  closeModal(){
    this.activeModal.close();
  }
  login(form:NgForm){
    if(form.valid)
    {
      let isExist = this.userList.find(x=> x.userid == this.email && x.password == this.password);
      if(isExist){
        let objresponse = {
          userId:isExist.userid,
          userName:isExist.username,
        }
        this.credentialsService.setCredentials(objresponse);
        this.activeModal.close();
        this.router.navigate(['home']);
      }
      else{
        this.toastr.error(errorMessage.INVALID_USER);
      }
    }    
  }

}
