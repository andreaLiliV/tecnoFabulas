import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let navCtrlSpy: jasmine.SpyObj<NavigationExtras>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
    alertControllerSpy = jasmine.createSpyObj('AlertController', ['create']);

    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        { provide: NavController, useValue: navCtrlSpy },
        { provide: AlertController, useValue: alertControllerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  
  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  

  it('Debería mostrar alerta de credenciales correctas', async () => {
    component.usuario = 'alivinu12';
    component.password = '1234';

    alertControllerSpy.create.and.returnValue(
      Promise.resolve({ present: () => Promise.resolve() } as any)
    );

    await component.login(); 
    
    expect(alertControllerSpy.create).toHaveBeenCalledWith({
      header: 'Inicio de sesión',
      message: 'Credenciales correctas.',
      buttons: ['OK'],
     
    });
    


  });

  

  it('Debería mostrar alerta de credenciales inválidas', async () => {
    component.usuario = '';
    component.password =  '';

    alertControllerSpy.create.and.returnValue(
      Promise.resolve({ present: () => Promise.resolve() } as any)
    );

    await component.login();

    expect(alertControllerSpy.create).toHaveBeenCalledWith({
      header: 'Error',
      message: 'Credenciales inválidas.',
      buttons: ['OK'],
    });


  });


});







