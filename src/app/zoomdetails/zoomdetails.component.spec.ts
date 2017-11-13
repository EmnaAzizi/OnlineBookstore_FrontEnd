import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomdetailsComponent } from './zoomdetails.component';

describe('ZoomdetailsComponent', () => {
  let component: ZoomdetailsComponent;
  let fixture: ComponentFixture<ZoomdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoomdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
