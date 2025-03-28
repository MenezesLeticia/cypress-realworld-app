describe("Login com sucesso", () => {
  const selectorsList = {
    baseUrl: "http://localhost:3000/",
    usernameField: "",
    passwordField: "",
    submit: "",
    confirmLogin: "",
  };

  it("Deve fazer login com um usuário válido", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#username").type("Dina20");
    cy.get("#password").type("s3cret");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="main"]').should("be.visible");
    cy.get('[data-test="sidenav-signout"]').should("be.visible");
  });
});

describe("Tentar fazer login com credenciais inválidas", () => {
  it("Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#username").type("usuarioteste");
    cy.get("#password").type("senhateste");
    cy.get('[data-test="signin-submit"]').click();
    cy.get('[data-test="signin-error"]').should("be.visible");
  });
});
