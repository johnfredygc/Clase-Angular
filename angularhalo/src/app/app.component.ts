import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { FormularioComponent } from './formulario/formulario.component';
import { MapaComponent } from './mapa/mapa.component';
import { VideoComponent } from './video/video.component';
import { RegistroComponent } from './registro/registro.component';
import { VideoshaloComponent } from './videoshalo/videoshalo.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, BienvenidoComponent, FormularioComponent, MapaComponent, VideoComponent, RegistroComponent, VideoshaloComponent, TarjetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularhalo';
}
