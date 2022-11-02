import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendudukComponent } from './penduduk.component';

describe('PendudukComponent', () => {
  let component: PendudukComponent;
  let fixture: ComponentFixture<PendudukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendudukComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendudukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
