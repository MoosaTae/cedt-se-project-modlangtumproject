describe('Test visit my web', () => {
  it('User1-1', () => {
    cy.visit("http://localhost:3000");
    cy.visit("http://localhost:3000/auth/login");
    cy.get("input[name=email]").type("pppp@gmail.com");
    cy.get("input[name=password]").type("123456");
    cy.get("button").contains("Sign in with Credentials").click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.visit("http://localhost:3000/user");
    cy.visit("http://localhost:3000/user/edit");
    cy.get("input[id=username]").type("p1");
    cy.get("input[id=password]").type("123456");
    cy.get("button").contains("Save").click();
  })

  it('User1-3', () => {
    cy.visit("http://localhost:3000");
    cy.visit("http://localhost:3000/auth/login");
    cy.get("input[name=email]").type("pppp@gmail.com");
    cy.get("input[name=password]").type("123456");
    cy.get("button").contains("Sign in with Credentials").click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.visit("http://localhost:3000/company");
    cy.visit("http://localhost:3000/company/65e3428465164ca39be76934");
    cy.get("button").contains("View Available Job").click();
    cy.get("button").contains("Apply").click();
    cy.contains('Upload File').click()
  })
})