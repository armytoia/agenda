import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../entidade/cidade';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.page.html',
  styleUrls: ['./listar-cidade.page.scss'],
})
export class ListarCidadePage implements OnInit {
  listaCidade: Observable<Cidade[]>;

    constructor(private fire: AngularFireDatabase) {
      this.listaCidade = this.fire.list<Cidade>('cidade').snapshotChanges().pipe(
        map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
      );
    }
  ngOnInit() {
  }

}
