import { Component, OnInit } from '@angular/core';
import { Usuario } from '../entidade/usuario';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  usuario: Usuario = new Usuario();
  constructor(private fire: AngularFireDatabase , private rota: Router) { }
  ngOnInit() {
  }
  cadastrar() {
    this.fire.list('usuario').push(this.usuario);
    this.usuario = new Usuario();
    this.rota.navigate(['pagina']);
  }
}
