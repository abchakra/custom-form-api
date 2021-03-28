
import { CustomForm, Themes } from "./form/FormTypes"
import { createNewFormSchema } from "./utils";


/**
 * This method is used for creating new form with default fields 
 * Saving is not required as user can skip to save this form.
 */
export function createCustomForm(name: string, theme?: Themes): CustomForm {
    //Generate new form ID 
    const newFormSchema: CustomForm = createNewFormSchema(name, theme);
    return newFormSchema;
}


/**
 * Save/Update/Edit a Form with partial changes to existing fields or newly added fields
 */
export function updateCustomForm(form: CustomForm): CustomForm {
    // if existing fields have been modified , the change should be allowed and we donot keep the old field information
    //Applicant input data will be shown to the Hiring Manager as text only if the field is present in the customer form or else it will be discarded.

    form.updatedAt = new Date();//update last save time


    //Serialize form schema
    return form;

}


/**
 * 
 * 
 * Save form for a given form_id
 * @param data 
 * 
 */
export function submitCustomForm(form_id: string, data: Record<string, any>): boolean {
    let values: string;

    //We can validate the in the backend API again, to check if any invalide data is present.
    // we can also change data using middleware to make it more 
    values = JSON.stringify(data);
    // console.log(form_id, data)

    //Serialize {values} to the submit form using {@form_id}


    return true;
}

/**
 * Return a Form given its id
 * @param form_id 
 */
export function getFormById(form_id: string): Promise<CustomForm> {
    throw new Error("Function not implemented.");
}
