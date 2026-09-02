import { ComponentFixture, TestBed } from '@angular/core/testing';

import { At1 } from './at1'; 

describe('At1', () => {
  let component: At1;
  let fixture: ComponentFixture<At1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [At1],
    }).compileComponents();

    fixture = TestBed.createComponent(At1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});