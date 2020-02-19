import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsAddressSearchComponent } from './google-maps-address-search.component';

describe('GoogleMapsAddressSearchComponent', () => {
  let component: GoogleMapsAddressSearchComponent;
  let fixture: ComponentFixture<GoogleMapsAddressSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleMapsAddressSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsAddressSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
