import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignersofficeComponent } from './foreignersoffice.component';

describe('OncallComponent', () => {
  let component: ForeignersofficeComponent;
  let fixture: ComponentFixture<ForeignersofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignersofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignersofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
