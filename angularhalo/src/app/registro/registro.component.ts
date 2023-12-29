import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  mostrarMensaje = false
  registroForm = new FormGroup({
    correo: new FormControl("", [Validators.required, Validators.email]),
    clave: new FormControl("", [Validators.required, Validators.minLength(6)]),
    direccion: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    direcciontra: new FormControl("", [Validators.required, Validators.maxLength(30)]),
    ciudad: new FormControl("", [Validators.required, Validators.maxLength(15)]),
    departamento: new FormControl("", [Validators.required, Validators.nullValidator]),
    zip: new FormControl("", [Validators.required, Validators.maxLength(6)])
  })

  get correo() {
    return this.registroForm.get("correo")?.value
  }
  get clave() {
    return this.registroForm.get("clave")?.value
  }
  guardar() {
    const estadoformulario = this.registroForm.status
    console.log(estadoformulario, this.correo, this.clave)
    console.log(this.registroForm)
    this.mostrarMensaje = false
    if (this.registroForm.status == "INVALID") {
      this.mostrarMensaje = true
    }
  }
}
