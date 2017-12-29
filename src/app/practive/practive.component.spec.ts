import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiveComponent } from './practive.component';

describe('PractiveComponent', () => {
  let component: PractiveComponent;
  let fixture: ComponentFixture<PractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
