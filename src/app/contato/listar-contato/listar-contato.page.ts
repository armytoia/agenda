import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from '../entidade/contato';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-contato',
  templateUrl: './listar-contato.page.html',
  styleUrls: ['./listar-contato.page.scss'],
})
export class ListarContatoPage implements OnInit {
  listaContatos: Observable<Contato[]>;

  constructor(private fire: AngularFireDatabase) {
    this.listaContatos = this.fire.list<Contato>('contato').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)

  }
  ngOnInit() {
  }
  //<ion-item *ngFor = "let contato of listaContatos | async"> serve para percorrer a lista de contatos
}
