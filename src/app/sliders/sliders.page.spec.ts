import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlidersPage } from './sliders.page';

describe('SlidersPage', () => {
  let component: SlidersPage;
  let fixture: ComponentFixture<SlidersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
