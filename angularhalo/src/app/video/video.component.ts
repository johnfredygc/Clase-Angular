import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VideoshaloComponent } from '../videoshalo/videoshalo.component';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule, VideoshaloComponent, TarjetasComponent],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {

}
