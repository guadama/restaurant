import { Component, OnInit } from '@angular/core';
import { XsegundoService } from '../../services/xsegundo.service';
import { ValorReloj } from '../../models/valor-reloj';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss']
})
export class PuestoComponent implements OnInit {
  datos$: Observable<ValorReloj>;
  hora: number;
  minutos: string;
  dia: string;
  fecha: string;
  ampm: string;
  segundos: string;

  isWelcome: boolean = true;
  puesto: string = '';

  constructor(private segundo: XsegundoService) { }

  ngOnInit() {
    this.Clock();
  }

  showMenu() {
    this.isWelcome = !this.isWelcome;
  }

  Clock() {
    this.datos$=this.segundo.getInfoReloj();
    this.datos$.subscribe(x => {
      this.hora = x.hora;
      this.minutos = x.minutos;
      this.dia = x.diadesemana;
      this.fecha = x.diaymes;
      this.ampm = x.ampm;
      this.segundos = x.segundo
    });
}

}
