import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salvar-contato',
  templateUrl: './salvar-contato.page.html',
  styleUrls: ['./salvar-contato.page.scss'],
})
export class SalvarContatoPage implements OnInit {
  contato: Contato = new Contato();
  constructor(private fire: AngularFireDatabase , private rota: Router) { }
  ngOnInit() {
  }
  salvar() {
    this.fire.list('contato').push(this.contato);
    this.contato = new Contato();
    this.rota.navigate(['listar-contato']);
  }

}
