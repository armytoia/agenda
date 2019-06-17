import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private rota : Router) {}
  direcionar(){
    this.rota.navigate(['salvar-contato']);
}
  ir(){
  this.rota.navigate(['listar-contato']);
}
}
