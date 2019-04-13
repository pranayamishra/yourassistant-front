import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerserviceComponent } from './partnerservice.component';

describe('PartnerserviceComponent', () => {
  let component: PartnerserviceComponent;
  let fixture: ComponentFixture<PartnerserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
