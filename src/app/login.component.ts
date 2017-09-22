import { Component } from '@angular/core';


@Component({
  selector: 'login-component',
  templateUrl :'./login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  { 
  public userNameDB:string="Rahul";
  public  passwordDB:string="12345"
  public userName:string;
  public  password:string;
  public  authenticationResult:string;
  public  authenticationResultForUser:string;
   public  flage:boolean;
   public  flageHide:boolean=true;
  public authentication (): void  
  {
  if(this.userName===this.userNameDB && this.password===this.passwordDB)
    {
 this.flage=true;
 this.flageHide=false;
  this.authenticationResultForUser="wellcome Rahul ";
   }
else{
       this.authenticationResult="Please Enter Valid UserName And Password ";
  }
    }


}
