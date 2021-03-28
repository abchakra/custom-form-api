import { v4 as uuidv4 } from 'uuid';

/**Possible field types */
const FieldTypes = {
    Text: 'text', //Textbox
    Email: 'email', //Password Text
    Select: 'select', // Single Selection dropdown
    Boolean: 'boolean', // Checkbox or toggle
    File: 'file',// File 
} as const;

/**
 * Used by the Client api when creating new fields
 */
export type Fields = typeof FieldTypes[keyof typeof FieldTypes];


/**Possible field types */
const ThemesType = {
    SoftwareEngineer: 'software-engineer', //Software engineer
    AualityAssurance: 'aualityassurance', // Quality Assurance
    Sales: 'sales', // Sales
    Marketing: 'marketing',// Marketing 
} as const;
export type Themes = typeof ThemesType[keyof typeof ThemesType];


export interface Validation{
    required:boolean,
    minlength?: number,
    maxlength?: number,
}

export interface BaseField {
    readonly field_id: string;//unique identifier ,cannot be modified
    label: string;//label 
    type: Fields; // available Field types
    isVisible: boolean;
    validations?:Validation;
    placeholder?: string; //placeholder text 
    dependsOn?:DependsOn;// conditional field 
   
}


export type DependsOnOperator = "equal" | "in"|"<"|">";

export interface DependsOn{
    id:string;// if present then the field will be shown when required condition is met
    condition?:any;// store value for the dependent field on which the current field will be visible
    operator?:DependsOnOperator; // operator for comparision of values
}



export interface TextField extends BaseField {
}

export interface EmailField extends TextField {
}

export interface SingleSelectField extends BaseField {
    choices: string[],
}

export interface BooleanField extends BaseField {
    widget?: string  //checkbock or switch default is checkbox
}

export interface FileField extends BaseField {
}

export interface CustomForm {
    readonly form_id: string,//unique form id,cannot be modified
    name: string, //Form header
    description?: string,//Form description
    fields: BaseField[],
    createdAt: Date,
    updatedAt: Date,
    readOnly:boolean,// flag set by form creator so that other users cannot change it.
    published:boolean// true if it is online or else false in preview mode
    
}
