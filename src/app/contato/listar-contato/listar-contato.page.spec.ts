import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContatoPage } from './listar-contato.page';

describe('ListarContatoPage', () => {
  let component: ListarContatoPage;
  let fixture: ComponentFixture<ListarContatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarContatoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarContatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
