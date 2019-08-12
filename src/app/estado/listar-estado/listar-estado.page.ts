import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../entidade/estado';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.page.html',
  styleUrls: ['./listar-estado.page.scss'],
})
export class ListarEstadoPage implements OnInit {
  listaEstado: Observable<Estado[]>;

    constructor(private fire: AngularFireDatabase) {
      this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
        map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );
    }

  ngOnInit() {
  }

}
