import FillOutPage from "../pageObjects/fillOut.page";

describe('scenarios', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form');
    cy.viewport(1920, 1080);
  });

  it('fill out all', () => {
    FillOutPage.fillForm('Rolands', 'Safonovs', 's20saforola@venta.lv', '28795435');
    FillOutPage.setBDate('13', 'December', '2000');
    FillOutPage.setSubjects('Economics');
    FillOutPage.hobbiesCBox(3);
    FillOutPage.uploadPicture('files/test_image1.jpg');
    FillOutPage.genderSelect(0);
    FillOutPage.setState('NCR');
    FillOutPage.setCity('Delhi');
    FillOutPage.sumbitForm();

    FillOutPage.validateValues('Rolands Safonovs', 's20saforola@venta.lv', 'Male', '28795435', '13 December,2000', 'Economics', 'Music', 'test_image1.jpg', 'NCR Delhi');

  });
});