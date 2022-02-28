import { Component, OnInit } from '@angular/core';
import { Datos } from './calculadora.models'
import { CalculadoraService } from './calculadora.service'

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  datos: Datos = {
    num1: -1,
    num2: -1,
    op: ""
  };

  res: number | null | string = "";

  constructor(
    private calculadoraService: CalculadoraService
  ) { }

  ngOnInit(): void {
  }

  ingresarnumero(numero: number){
       console.log(numero)
    if(this.datos.num1 < 0){
      this.datos.num1 = numero
    }else{
      this.datos.num2 = numero
    }

  }

  ingresaroperacion(op: string){
    this.datos.op = op
  }

  limpiar(){

  }

  resultado(){

    console.log("Enviando....")

    this.res = "Calculando..."

    this.calculadoraService.getResultado(this.datos).subscribe(
      {
        next: res => {

          this.res = res.datos
          console.log("resultado", res)
        },
        error: err => {
          if (err.error.error){

            this.res = err.error.error
          }else{
            this.res = "Error de conexion"
          }
          console.log(err)
        }
      }
    )
  }

}
