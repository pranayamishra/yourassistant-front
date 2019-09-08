import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercareconComponent } from './customercarecon.component';

describe('CustomercareconComponent', () => {
  let component: CustomercareconComponent;
  let fixture: ComponentFixture<CustomercareconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercareconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercareconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
