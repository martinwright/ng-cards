import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHorizComponent } from './card-horiz.component';

describe('CardHorizComponent', () => {
  let component: CardHorizComponent;
  let fixture: ComponentFixture<CardHorizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardHorizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHorizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
