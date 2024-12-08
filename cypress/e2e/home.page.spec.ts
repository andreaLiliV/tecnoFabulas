describe('Home Page', () => {

  beforeEach(() => {
    //Configura la URL
    cy.visit('localhost:8100/home');
  });

  /*

  it('Verifica que el ion-input nombre no esté vacio', () => {

    cy.get('ion-input#nombre')
      //.shadow()
      .find('input')
      .should('not.have.value', 'Andrea');
 
  */
  it('Verifica que los campos no estén vacíos', () => {

    const datosPrueba = {
      nombre: 'Andrea',
      apellido: 'Vilches',
      usuario: 'alivinu',
      password: '1234',
    };

    //Rellena los campos
    cy.get('input[name="nombre"]').type(datosPrueba.nombre);
    cy.get('input[name="apellido"]').type(datosPrueba.apellido);
    cy.get('input[name="usuario"]').type(datosPrueba.usuario);
    cy.get('input[name="password"]').type(datosPrueba.password);

    //Verifica los campos
    cy.get('input[name="nombre"]').should('have.value', datosPrueba.nombre);
    cy.get('input[name="apellido"]').should('have.value', datosPrueba.apellido);
    cy.get('input[name="usuario"]').should('have.value', datosPrueba.usuario);
    cy.get('input[name="password"]').should('have.value', datosPrueba.password);
   

  });

  it('Verifica límite de longitud en password sean 4 caracteres', () => {

    cy.get('input[name="password"]').type('a'.repeat(3)); //Se selecciona la caja de texto password y se intenta ingresar 49 caracteres
    cy.get('input[name="password"]').should('have.value', 'a'.repeat(3));

  }); 


  it('Verifica mensaje de error', () => {    

    //Campos vacíos
    cy.get('input[name="nombre"]').should('have.value', '');
    cy.get('input[name="apellido"]').should('have.value', '');
    cy.get('input[name="usuario"]').should('have.value', '');
    cy.get('input[name="password"]').should('have.value', '');

    //click en el botón Ingresar Datos
    //cy.contains('button', 'Ingresar datos').click();
    cy.get('.registro-button').click();
    cy.get('ion-alert').should('exist');

    //Verifica el título del alert
    cy.get('ion-alert .alert-head').should('contain', 'Mensaje');   

  });

  it('Debería rechazar un intento de inyección de código malicioso', () => {

    //Inyectar código malicioso en usuario y password
    cy.get('input[name="usuario"]').type('<script>alert("hack")</script>');
    cy.get('input[name="password"]').type('OR 1=1;');

    //Completar el resto de los campos para que no estén vacíos
    cy.get('input[name="nombre"]').type('Andrea');
    cy.get('input[name="apellido"]').type('Vilches');
    cy.get('.registro-button').click();

  });

});
