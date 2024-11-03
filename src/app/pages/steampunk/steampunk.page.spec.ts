import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SteampunkPage } from './steampunk.page';

describe('SteampunkPage', () => {
  let component: SteampunkPage;
  let fixture: ComponentFixture<SteampunkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SteampunkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
