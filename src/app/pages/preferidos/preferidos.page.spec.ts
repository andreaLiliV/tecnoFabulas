import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferidosPage } from './preferidos.page';

describe('PreferidosPage', () => {
  let component: PreferidosPage;
  let fixture: ComponentFixture<PreferidosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
