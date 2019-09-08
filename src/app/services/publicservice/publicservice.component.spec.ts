import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicserviceComponent } from './publicservice.component';

describe('PartnerserviceComponent', () => {
  let component: PublicserviceComponent;
  let fixture: ComponentFixture<PublicserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
