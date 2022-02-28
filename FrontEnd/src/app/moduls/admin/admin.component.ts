import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public variable: string = ""

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit(): void {

      console.log(this.loginService.login)

  }




}
