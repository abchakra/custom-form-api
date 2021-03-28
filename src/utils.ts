import { fieldFactory } from './form/FieldFactory';
import {  CustomForm,  Themes } from './form/FormTypes';


/**
 * Generate a default theme based form
 * @param formName form name/title
 * @param theme type of form 
 * @returns 
 */
export function createNewFormSchema( name: string, theme?: Themes): CustomForm {
    return {
        form_id: fieldFactory.generateFormID(),
        name,
        fields: fieldFactory.getThemeFields(theme),
        createdAt: new Date(),
        updatedAt: new Date(),
        published:false,
        readOnly:false,
        description:""
    }
}


