import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {

  pais = "peru"
  listado = new Array()

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    const pais = this.rutaActiva.snapshot.params["pais"]

    const datos = this.rutaActiva.snapshot.params["list"]

    if (pais) {
      this.listado = JSON.parse(datos).filter((dato: { pais: any; }) => dato.pais === pais)
    } else {
      this.listado = JSON.parse(datos)
    }
  }
}
