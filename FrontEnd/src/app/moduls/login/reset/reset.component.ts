import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {



  @Input() datos: any = null;

  @Output() success = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    //console.log("Datos desde hijo", this.datos)

    this.success.emit()

  }

}
