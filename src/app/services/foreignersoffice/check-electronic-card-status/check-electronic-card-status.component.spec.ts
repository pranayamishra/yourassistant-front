import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckElectronicCardStatusComponent } from './check-electronic-card-status.component';

describe('CheckElectronicCardStatusComponent', () => {
  let component: CheckElectronicCardStatusComponent;
  let fixture: ComponentFixture<CheckElectronicCardStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckElectronicCardStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckElectronicCardStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
