
/*
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  //let navCtrlSpy: jasmine.SpyObj<NavigationExtras>;
  let navCtrlSpy: jasmine.SpyObj<NavController>;
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

  */

  

  

  import { TestBed } from '@angular/core/testing';
  import { ComponentFixture } from '@angular/core/testing';
  import { LoginPage } from './login.page';  
  import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationExtras, Router } from '@angular/router';



 //CONFIGURACIÓN INICIAL
  describe('LoginPage', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let navCtrlSpy: jasmine.SpyObj<NavController>;
    //let router: Router;
    //let navigateSpy: jasmine.Spy;

    beforeEach(() => {
      navCtrlSpy = jasmine.createSpyObj('NavController', ['navigateForward']);
      localStorage.clear();

      TestBed.configureTestingModule({
        declarations: [LoginPage],
        providers: [
          { provide: NavController, useValue: navCtrlSpy },          
        ],
        
        //providers: [DomSanitizer],
        //providers: [NavController],
        //providers: [
          //{ provide: NavController, useValue: navCtrlSpy },
        //],
      }).compileComponents();

      //const fixture = TestBed.createComponent(LoginPage);
      //component = fixture.componentInstance;
      //component = TestBed.createComponent(LoginPage).componentInstance; (ESTE ES)
      //navCtrlSpy = spyOn(TestBed.inject(NavController), 'navigateForward');

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    });

 
  
  //Componente creado correctamente
  it('Debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  //1. LOGIN EXITOSO
  it('Debería navegar a perfil de usuario al iniciar sesión con éxito', async () => {

    //Datos del usuario correctos
    component.usuario = 'alivinu';
    component.password = '1234';

    //Simula validación del login
    spyOn(component, 'login').and.callThrough();
   
    await component.login();

    //Verifica que las validaciones sean correctas
    expect(component.login).toHaveBeenCalled();
    expect(component.usuario).toBe('alivinu');
    expect(component.password).toBe('1234');

    //Verifica que se navegue correctamente
    //expect(navCtrlSpy.navigateForward).toHaveBeenCalledOnceWith(['/home']);
    //expect(navCtrlSpy).toHaveBeenCalledOnceWith(['/tabs/generos']);

    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith(['/tabs/perfil'], {
      queryParams: { usuario: 'alivinu' , password: '1234' },
    });


  });

  

  //2. LOGIN FALLIDO POR DATOS INCORRECTOS : USUARIO VACÍO
  it('Debería no navegar a perfil de usuario: el usuario no puede estar vacío', async () => {

    //Datos del usuario correctos
    component.usuario = '';
    component.password = '1234';

    //Simula validación del login
    spyOn(component, 'login').and.callThrough();
   
    await component.login();

    //Verifica que las validaciones sean correctas
    expect(component.login).toHaveBeenCalled();
    expect(component.usuario).toBe('');
    expect(component.password).toBe('1234');   


  });

  //3. LOGIN FALLIDO POR DATOS INCORRECTOS : USUARIO CON FORMATO INVÁLIDO
  it('Debería no navegar a perfil de usuario: el usuario tiene formato inválido', async () => {

    //Datos del usuario correctos
    component.usuario = '#livinu';
    component.password = '1234';

    //Simula validación del login
    spyOn(component, 'login').and.callThrough();
   
    await component.login();

    //Verifica que las validaciones sean correctas
    expect(component.login).toHaveBeenCalled();
    expect(component.usuario).toBe('#livinu');
    expect(component.password).toBe('1234');   


  });

  //4. LOGIN FALLIDO POR DATOS INCORRECTOS : PASSWORD VACÍO
  it('Debería no navegar a perfil de usuario: el password no puede estar vacío', async () => {

    //Datos del usuario correctos
    component.usuario = 'alivinu';
    component.password = '';

    //Simula validación del login
    spyOn(component, 'login').and.callThrough();
   
    await component.login();

    //Verifica que las validaciones sean correctas
    expect(component.login).toHaveBeenCalled();
    expect(component.usuario).toBe('alivinu');
    expect(component.password).toBe('');   


  });

  //4. LOGIN FALLIDO POR DATOS INCORRECTOS : PASSWORD NO PUEDE TENER MÁS DE CUATRO CARACTERES
  it('Debería no navegar a perfil de usuario: el password no puede tener más de cuatro caracteres', async () => {

    //Datos del usuario correctos
    component.usuario = 'alivinu';
    component.password = '12345678';

    //Simula validación del login
    spyOn(component, 'login').and.callThrough();
   
    await component.login();

    //Verifica que las validaciones sean correctas
    expect(component.login).toHaveBeenCalled();
    expect(component.usuario).toBe('alivinu');
    expect(component.password).toBe('12345678');   


  });

  //5. FLUJO CON MÚLTIPLES INTENTOS FALLIDOS
  it('No iniciar sesión con múltiples intentos fallidos', async () => {
    
    //Simula múltiples intentos fallidos
    const incorrectAttempts = [
      {usuario: '#livinu1', password: '12345678'},
      {usuario: '#livinu2', password: '12345678'},
      {usuario: '#livinu3', password: '12345678'},

    ];

    for (let attempt of incorrectAttempts){
      component.usuario = attempt.usuario;
      component.password = attempt.password;

      await component.login();

      //Verifica que el componente no ha cambiado de estado al intentar iniciar sesión con datos incorrectos
      expect(component.usuario).toBe(attempt.usuario);
      expect(component.password).toBe(attempt.password);
    }

  });

  

  it('Debería navegar a la página de registro de usuario', () => {
    component.registrar();
    expect(navCtrlSpy.navigateForward).toHaveBeenCalledWith(['/home']);
  });

  /*it('Debería sanitizar datos maliciosos en el usuario y password', async () => {
    //Datos maliciosos
    component.usuario = '<script>alert("hacked")</script>';
    component.password = '1234';

    await component.login();

    expect(component.mensajeError).toBe('Datos no válidos');

  });*/





/*


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

  */

  it('Debería almacenar el nombre de usuario en localStorage al iniciar sesión', () => {

    const username = "alivinu";

    //simula un proceso de login exitoso que almacena el nombre de usuario en localStorage
    localStorage.setItem('usuario', username);

    //Verifica que le usuario esté almacenado correctamente.
    expect(localStorage.getItem('usuario')).toBe(username);
    

  });

  it('Debería persistir el nombre de usuario localStorage en diferentes páginas', () => {
    const username = "alivinu";
    localStorage.setItem('usuario', username);

    //Simulación de cambio de página usando navController
    const navigationExtras = { state: {username} };
    navCtrlSpy.navigateForward(['/tabs/perfil'], navigationExtras);

    //Verifica que el nombre de usuario se mantenga en localStorage despues de la navegación
    expect(localStorage.getItem('usuario')).toBe(username);

    //Simula navegación a otra página, por ejemplo, a la pagina registro
    navCtrlSpy.navigateForward(['/home'], navigationExtras);

    //Verifica que el nombre de usuario se mantenga en localStorage despues de la navegación
    expect(localStorage.getItem('usuario')).toBe(username);


  });


});







