/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThaumaturgyRoadsComponent } from './thaumaturgy-roads.component';

describe('ThaumaturgyRoadsComponent', () => {
  let component: ThaumaturgyRoadsComponent;
  let fixture: ComponentFixture<ThaumaturgyRoadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaumaturgyRoadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaumaturgyRoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
