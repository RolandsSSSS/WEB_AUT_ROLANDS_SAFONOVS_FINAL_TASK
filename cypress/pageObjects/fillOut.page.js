import 'cypress-file-upload';

class FillOutPage{
    static get firstNameInput(){
        return cy.get('#firstName');
    }

    static get lastNameInput(){
        return cy.get('#lastName');
    }

    static get emailInput(){
        return cy.get('#userEmail');
    }

    static get mobileNumberInput(){
        return cy.get('#userNumber');
    }

    static get bDateInput(){
        return cy.get('#dateOfBirthInput');
    }

    static get subjectsInput(){
        return cy.get('#subjectsInput');
    }

    static hobbiesCBox(hobby){
        return cy.get(`label[for="hobbies-checkbox-${hobby}"]`).click();
    }

    static get uploadPictureInput(){
        return cy.get('#uploadPicture');
    }

    static genderSelect(gender){
        return cy.get('[name="gender"]').eq(gender).click({force: true});
    }

    static get stateDropdown(){
        return cy.get('#state').click({ force: true });
    }

    static get cityDropdown() {
        return cy.get('#city').click({ force: true });
    }

    static get submitButton(){
        return cy.get('#submit');
    }

    static fillForm(fName, lName, email, mNumber){
        this.firstNameInput.type(fName);
        this.lastNameInput.type(lName);
        this.emailInput.type(email);
        this.mobileNumberInput.type(mNumber);
    }

    static setBDate(day, month, year){
        this.bDateInput.click();
        cy.get('.react-datepicker__month-select').select(month);
        cy.get('.react-datepicker__year-select').select(year);
        cy.contains('.react-datepicker__day', day).click();
    }

    static setSubjects(subject){
        this.subjectsInput.type(subject);
        cy.contains('.subjects-auto-complete__menu-list', subject).click();
    }

    static uploadPicture(filePath){
        this.uploadPictureInput.attachFile(filePath);
    }

    static setState(state){
        cy.get('#state').find('.css-1wa3eu0-placeholder').click();
        cy.get('#state').find('.css-1wa3eu0-placeholder').type(state);
        cy.get('#state').find('.css-1g6gooi input').type('{enter}');
    }

    static setCity(city) {
        cy.get('#city').find('.css-1wa3eu0-placeholder').click();
        cy.get('#city').find('.css-1wa3eu0-placeholder').type(city);
        cy.get('#city').find('.css-1g6gooi input').type('{enter}');
    }

    static sumbitForm(){
        this.submitButton.click();
    }

    static validateValues(sNameAndSurName, sEmail, sGender, sMobileN, date, subject, hobbies, pictures, stateAndCity){
        cy.get('tbody tr').each((row) => {
            // Get the row text
            cy.wrap(row).invoke('text').then((text) => {
              // Validate the row content based on the text
              if (text.includes('Student Name')) {
                expect(text).to.contain(sNameAndSurName);
              } else if (text.includes('Student Email')) {
                expect(text).to.contain(sEmail);
              } else if (text.includes('Gender')) {
                expect(text).to.contain(sGender);
              } else if (text.includes('Mobile')) {
                expect(text).to.contain(sMobileN);
              } else if (text.includes('Date of Birth')) {
                expect(text).to.contain(date);
              } else if (text.includes('Subjects')) {
                expect(text).to.contain(subject);
              } else if (text.includes('Hobbies')) {
                expect(text).to.contain(hobbies);
              } else if (text.includes('Picture')) {
                expect(text).to.contain(pictures);
              } else if (text.includes('State and City')) {
                expect(text).to.contain(stateAndCity);
              } else {
              }
            });
          });
    }

}
export default FillOutPage;