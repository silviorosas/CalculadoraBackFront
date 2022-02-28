import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public datosParaHijo: string = "Hola como estas"

  public reset: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //console.log(this.reset)
    this.loginService.login = true
    this.router.navigate(['/admin']);
  }

  Funcreset(){
    console.log("Evento emitido")
  }

}
