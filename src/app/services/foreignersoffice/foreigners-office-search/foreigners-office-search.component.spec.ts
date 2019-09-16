import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignersOfficeSearchComponent } from './foreigners-office-search.component';

describe('ForeignersOfficeSearchComponent', () => {
  let component: ForeignersOfficeSearchComponent;
  let fixture: ComponentFixture<ForeignersOfficeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeignersOfficeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeignersOfficeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
