import { v4 as uuidv4 } from 'uuid';
import { BooleanField, EmailField, FileField, CustomForm, SingleSelectField, TextField, BaseField, Themes, DependsOn, DependsOnOperator } from './FormTypes';

class FieldFactory {

    /**
     * Return fields for the default theme.
     */
    getDefaultThemeFields(): BaseField[] {
        const firstName: TextField = fieldFactory.createTextField("First Name", true, "Enter First Name");
        const middleName: TextField = fieldFactory.createTextField("Middle Name", false, "Enter middle Name");
        const lastName: TextField = fieldFactory.createTextField("Last Name", true, "Enter last Name");
        const email: EmailField = fieldFactory.createEmailField("Email", true);
        const choice: SingleSelectField = fieldFactory.createSingleSelectField("Education", true, ['Graduate', 'Post Graduate'], "Select Education Level");
        const workPermit: BooleanField = fieldFactory.createBooleanField("Work permit?", true);
        const workPermitType: TextField = fieldFactory.createTextField("Permit type", false, "Enter Valid Permit type", this.createConditionOnField(workPermit.field_id, true, "equal"));
        const resume: FileField = fieldFactory.createFileField("Resume", true, "Provide Resume");

        return [firstName, middleName, lastName, email, choice, workPermit, workPermitType, resume];
    }


    public createConditionOnField(field_id: string, condition: any, operator: DependsOnOperator) {
        const dependsOn: DependsOn = {
            id: field_id,
            condition,
            operator
        }
        return dependsOn;
    }

    public getThemeFields(theme?: Themes): BaseField[] {

        switch (theme) {
            //Add other themes as swtich cases.
            default:
                return this.getDefaultThemeFields();
        }

    }

    public getDefaultMin(): number {
        return 0;
    }
    public getDefaultMax(): number {
        return 128;
    }

    public generateFormID(): string {
        return uuidv4();
    }
    public createTextField(label: string, required: boolean, placeholder?: string, dependsOn?: DependsOn): TextField {
        const textField: TextField = {
            field_id: uuidv4(),
            label,
            placeholder,
            type: 'text',
            isVisible: dependsOn ? false : true,
            validations: {
                required,
                minlength: this.getDefaultMin(),
                maxlength: this.getDefaultMax()
            },
            dependsOn

        }
        return textField
    }


    public createEmailField(label: string, required: boolean, newplaceholder?: string, dependsOn?: DependsOn): EmailField {
        const field: EmailField = {
            field_id: uuidv4(),
            label,
            placeholder: newplaceholder ? newplaceholder : "Enter a valid Email",
            type: 'email',
            isVisible: dependsOn ? false : true,
            validations: {
                required,
                minlength: 3,
                maxlength: this.getDefaultMax()
            },
            dependsOn
        }
        return field;
    }

    public createSingleSelectField(label: string, required: boolean, choices: string[], placeholder?: string, dependsOn?: DependsOn): SingleSelectField {
        const field: SingleSelectField = {
            field_id: uuidv4(),
            label,
            placeholder,
            type: 'select',
            validations: {
                required,
            },
            isVisible: dependsOn ? false : true,
            choices,
            dependsOn
        }
        return field;
    }
    public createBooleanField(label: string, required: boolean, placeholder?: string, dependsOn?: DependsOn): BooleanField {
        const field: BooleanField = {
            field_id: uuidv4(),
            label,
            type: 'boolean',
            placeholder,
            validations: {
                required,
            },
            isVisible: dependsOn ? false : true,
            dependsOn
        }
        return field
    }
    public createFileField(label: string, required: boolean, placeholder?: string, dependsOn?: DependsOn): FileField {
        const field: FileField = {
            field_id: uuidv4(),
            label,
            placeholder: "Provide Resume",
            type: 'file',
            validations: {
                required,
            },
            isVisible: dependsOn ? false : true,
            dependsOn
        }
        return field
    }
}


export const fieldFactory: FieldFactory = new FieldFactory();