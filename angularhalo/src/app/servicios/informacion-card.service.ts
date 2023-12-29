import { Injectable } from '@angular/core';
import { TARJETASSAGA } from '../../assets/json/informacion.card';

@Injectable({
  providedIn: 'root'
})
export class InformacionCardService {
  getInformacionCard(){
    return TARJETASSAGA    
  }
  constructor() { }
}
