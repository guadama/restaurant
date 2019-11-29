import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss']
})
export class PuestoComponent implements OnInit {

  isWelcome: boolean = true;
  puesto: string = '';
  hora: string = '';

  constructor() { }

  ngOnInit() {
    this.Clock();
  }

  showMenu() {
    this.isWelcome = !this.isWelcome;
  }

  Clock() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    this.hora = h + ":" + m + ":" + s;
}

}
