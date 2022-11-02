import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeuanganComponent } from './keuangan.component';

describe('KeuanganComponent', () => {
  let component: KeuanganComponent;
  let fixture: ComponentFixture<KeuanganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeuanganComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeuanganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
