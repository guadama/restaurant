import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  estadoPositivo: boolean = false;
  claseNotificar: string[] = ['alertDes'];

  constructor() { }

  ngOnInit() {
  }

  cambiaAlert() {
    if (this.estadoPositivo) {
      this.claseNotificar = ['alertDes'];
    } else {
      this.claseNotificar = ['alertAct', 'bounce'];
    }
    this.estadoPositivo = !this.estadoPositivo; 
  }

}
