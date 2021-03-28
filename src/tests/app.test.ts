import { expect } from "chai";
import { createCustomForm, updateCustomForm, submitCustomForm } from "../app";
import { fieldFactory } from "../form/FieldFactory";
import { CustomForm } from "../form/FormTypes";


describe('Form API Tests', function () {

    let newForm: CustomForm;
    it('create new Form', function () {
        //Arrange
        const formTitle = "Fullstack Developer";
        //Act
        newForm = createCustomForm(formTitle);
        // console.log(JSON.stringify(newForm, null, 2));

        //Assert
        expect(formTitle).equal(newForm.name);
        expect(newForm).to.have.property('form_id');
        expect(newForm).to.have.property('name');
        expect(newForm).to.have.property('fields');
        expect(newForm.fields.length).equal(8);
        // Check for invisible fields
        const invisibleFields = newForm.fields.filter(field => field.isVisible === false);
        expect(invisibleFields.length).equal(1);
    });

    it('update Form', function () {
        //Arrange
        const javaSkill = fieldFactory.createSingleSelectField("Java", true, ['beginner', 'intermediate', 'expert'], "Select skill Level for java programming");
        const updatedForm: CustomForm = { ...newForm };
        updatedForm.fields.push(javaSkill);
        //Act
        updateCustomForm(updatedForm)
        //Assert
        expect(newForm.fields.length).equal(9);
    });


    it('Save Form data', function () {

        let formData: Record<string, any> = {};

        //Arrange
        formData[newForm.fields[0].field_id] = "Thomas"
        formData[newForm.fields[1].field_id] = "Jeffrey"
        formData[newForm.fields[2].field_id] = "Hanks"
        formData[newForm.fields[3].field_id] = "tom@gmail.com"
        formData[newForm.fields[4].field_id] = "Graduate"
        formData[newForm.fields[5].field_id] = true
        formData[newForm.fields[6].field_id] = "H-1B1"
        formData[newForm.fields[7].field_id] = "file://myresume"
        formData[newForm.fields[8].field_id] = "beginner"
        //Act
        const result = submitCustomForm(newForm.form_id, formData);

        //Assert
        expect(newForm.fields.length).equal(9);
        expect(result).equal(true);


    });
});

