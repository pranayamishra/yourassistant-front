import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralservicesComponent } from './centralservices.component';

describe('CentralservicesComponent', () => {
  let component: CentralservicesComponent;
  let fixture: ComponentFixture<CentralservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
