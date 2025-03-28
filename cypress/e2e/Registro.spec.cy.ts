describe("Registro de novo usuário com sucesso", () => {
  it.only("Deve registrar um novo usuário com informações válidas", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test="signup"]').click();
    cy.get("#firstName").type("Nometeste");
    cy.get("#lastName").type("Sobrenometeste");
    cy.get("#username").type("userteste");
    cy.get("#password").type("s3nha");
    cy.get("#confirmPassword").type("s3nha");
    cy.get('[data-test="signup-submit"]').click();
    cy.get(".SignInForm-paper").should("be.visible").and("contain", "Sign In");
  });
});

describe("Tentar registrar um novo usuário com informações incompletas", () => {
  it("Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test="signup"]').click();
    cy.get("#firstName").type("Nometeste");
    cy.get("#lastName").type("Sobrenometeste");
    cy.get("#username").type("userteste");
    cy.get("#password").type("s3nha1");
    cy.get("#confirmPassword").type("s3nha2");
    cy.get('[data-test="signup-submit"]').click({ force: true });
    cy.get(".MuiTypography-h5").should("be.visible").and("contain", "Sign Up");
  });
});
