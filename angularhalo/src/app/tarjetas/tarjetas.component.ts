import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InformacionCardService } from '../servicios/informacion-card.service';

@Component({
  selector: 'app-tarjetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjetas.component.html',
  styleUrl: './tarjetas.component.css'
})
export class TarjetasComponent {
constructor(private informacionCardService:InformacionCardService){

}
get data (){
  return this.informacionCardService.getInformacionCard()
}
}
