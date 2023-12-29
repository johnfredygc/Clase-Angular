import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {
  scrollto(ancla: string) {   const element = document.getElementById(ancla);   if (element) {     element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });   } }
}
