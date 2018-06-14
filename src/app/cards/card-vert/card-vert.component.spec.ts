import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVertComponent } from './card-vert.component';

describe('CardVertComponent', () => {
  let component: CardVertComponent;
  let fixture: ComponentFixture<CardVertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardVertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
