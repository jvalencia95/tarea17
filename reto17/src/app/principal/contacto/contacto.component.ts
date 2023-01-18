import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  contactForm: any;

  listado = [
    {
      name: "Juan",
      pais: "uruguay",
      email: "prueba@gmail.com",
      password: "pass",
      telephone: "148574595",
      message: "hola",
    },
    {
      name: "Juan",
      pais: "peru",
      email: "prueba@gmail.com",
      password: "pass",
      telephone: "148574595",
      message: "hola",
    },
    {
      name: "Juan",
      pais: "chile",
      email: "prueba@gmail.com",
      password: "pass",
      telephone: "148574595",
      message: "hola",
    },
    {
      name: "Juan",
      pais: "peru",
      email: "prueba@gmail.com",
      password: "pass",
      telephone: "148574595",
      message: "hola",
    },
    {
      name: "Juan",
      pais: "chile",
      email: "prueba@gmail.com",
      password: "pass",
      telephone: "148574595",
      message: "hola",
    },

  ]

  paisBusqueda = ""

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      telephone: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      message: new FormControl('', [Validators.required]
      )
    });
  }


  onSubmit() {
    this.listado.push(this.contactForm.value);
  }
}
