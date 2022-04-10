import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  obtainData() {
    console.log("El servicio portfolio esta corriendo")
}

}
