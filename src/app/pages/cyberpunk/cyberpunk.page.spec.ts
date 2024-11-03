import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CyberpunkPage } from './cyberpunk.page';

describe('CyberpunkPage', () => {
  let component: CyberpunkPage;
  let fixture: ComponentFixture<CyberpunkPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberpunkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
