import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BotonRetrocesogeneroComponent } from './boton-retrocesogenero.component';

describe('BotonRetrocesogeneroComponent', () => {
  let component: BotonRetrocesogeneroComponent;
  let fixture: ComponentFixture<BotonRetrocesogeneroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonRetrocesogeneroComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BotonRetrocesogeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
