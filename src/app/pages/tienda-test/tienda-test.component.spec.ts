import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaTestComponent } from './tienda-test.component';

describe('TiendaTestComponent', () => {
  let component: TiendaTestComponent;
  let fixture: ComponentFixture<TiendaTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiendaTestComponent]
    });
    fixture = TestBed.createComponent(TiendaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
