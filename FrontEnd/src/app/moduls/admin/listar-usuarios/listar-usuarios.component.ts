import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {


  public usuarios = [
    {nombre: "Javier", apellido: "sanchez"},
    {nombre: "Matias", apellido: "Bertolo"},
    {nombre: "Pablo", apellido: "Mamani"}
  ]

  private usuario = {
    nombre: "Javier", apellido: "sanchez"
  }

  constructor() { }

  ngOnInit(): void {
  }

  BtnNuevo(){
    //this.nuevo = true
  }

}
