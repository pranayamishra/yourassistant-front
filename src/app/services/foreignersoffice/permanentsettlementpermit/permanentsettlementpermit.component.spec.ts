import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentsettlementpermitComponent } from './permanentsettlementpermit.component';

describe('PermanentsettlementpermitComponent', () => {
  let component: PermanentsettlementpermitComponent;
  let fixture: ComponentFixture<PermanentsettlementpermitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanentsettlementpermitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentsettlementpermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
