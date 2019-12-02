import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

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
