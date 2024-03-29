 import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  credentials={
    email:'',
    password:'',
  }
  @Input()
  email: any;
  
  message="";
  msg="";
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("form submitted sucessfully");
    if((this.credentials.email!='' && this.credentials.password!='') && (this.credentials.email!=null && this.credentials.password)){
      console.log('we have to pass form data to server');
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //if token generate sucessfully then login
          console.log(this.credentials);
          
          localStorage.setItem("token",JSON.stringify(this.credentials));

          this.email=this.credentials.email;
          localStorage.setItem('credentialEmail',this.email);
          // window.location.href="/dashboard";
          window.location.href="/dashboard";
        },
        error=>{console.error();
          console.log("Exception Occured");
          this.msg="Wrong! Email or Password";
        } );
        
     
    }else{
      console.log("Empty value entry")
      this.message="Please fill the data before login"
      
    }
  }
  


}
