import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicResidencePermitComponent } from './electronic-residence-permit.component';

describe('ElectronicResidencePermitComponent', () => {
  let component: ElectronicResidencePermitComponent;
  let fixture: ComponentFixture<ElectronicResidencePermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicResidencePermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicResidencePermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
