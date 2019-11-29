import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss']
})
export class PuestoComponent implements OnInit {

  isWelcome: boolean = true;
  puesto: string = '';

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.isWelcome = !this.isWelcome;
  }

}
