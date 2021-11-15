import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAdmiComponent } from './catalogo-admi.component';

describe('CatalogoAdmiComponent', () => {
  let component: CatalogoAdmiComponent;
  let fixture: ComponentFixture<CatalogoAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoAdmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
