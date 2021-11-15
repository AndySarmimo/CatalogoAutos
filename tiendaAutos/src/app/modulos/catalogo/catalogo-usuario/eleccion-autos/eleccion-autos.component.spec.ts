import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionAutosComponent } from './eleccion-autos.component';

describe('EleccionAutosComponent', () => {
  let component: EleccionAutosComponent;
  let fixture: ComponentFixture<EleccionAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleccionAutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
