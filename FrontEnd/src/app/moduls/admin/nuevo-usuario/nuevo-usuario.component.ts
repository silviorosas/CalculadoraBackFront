import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  formsUsuario = new FormGroup({
    "nombre": new FormControl("", Validators.required),
    "apellido": new FormControl(""),
  })


  constructor() { }

  ngOnInit(): void {}

  BtnGuardar(){
    //this.usuarios.push( {nombre: "Mariana", apellido: "La rosa"})
    console.log(this.formsUsuario.value)
    console.log(this.formsUsuario.value.nombre)
    console.log(this.formsUsuario.value.apellido)
    console.log(this.formsUsuario.valid)
  }

}
