import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/service.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(
    public _usuarioService:UsuarioService
  ) { }

  ngOnInit() {
  }

}
