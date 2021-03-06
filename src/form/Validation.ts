// // currently this assumes every input is a string
// export interface InputStrings {
//     [everyProp: string]: string
//   }
  
//   type ValidationRule = (val: string) => boolean
//   type Errors<Inputs> = Partial<{ [P in keyof Inputs]: string }>
//   type Validator = (val: string) => string | void
//   type MakeValidator = (msg?: string) => Validator
//   type MakeValidatorWithArg = (arg: any, msg?: string) => Validator
  
//   export type ValidationSchema<Inputs> = Partial<{ [P in keyof Inputs]: Validator[] }>
  
//   export const composeValidator: (rule: ValidationRule, msg: string) => Validator = (rule, msg) => val => {
//     if (!rule(val)) {
//       return msg
//     }
//   }
  
//   // Rules
//   const validateEmail: ValidationRule = val => val.indexOf("@") !== -1
//   const validateRequired: ValidationRule = val => val.length > 0
//   const validateNumber: ValidationRule = val => Number.isNaN(Number.parseFloat(val))
//   const validateInt: ValidationRule = val => Number.isNaN(Number.parseInt(val))
//   const validateMinLength: (min: number) => ValidationRule = min => val => val.length >= min
  
//   // Validators from Functions
//   export const isRequired: MakeValidator = (message = "Required") => composeValidator(validateRequired, message)
//   export const isEmail: MakeValidator = (msg = "Valid Email Required") => composeValidator(validateEmail, msg)
//   export const isNumber: MakeValidator = (msg = "Number Required") => composeValidator(validateNumber, msg)
//   export const isInt: MakeValidator = (msg = "Integer Required") => composeValidator(validateInt, msg)
//   export const isMinLength: MakeValidatorWithArg = (min, msg) =>
//     composeValidator(validateMinLength(min), msg || `Min Length ${min} required`)
  
//   const rules = {
//     name: [isRequired()],
//     age: [isRequired("This should be an age")],
//     email: [isRequired(), isEmail()],
//   }
  
    
//   export class Validation<I extends InputStrings> {
//     public schema: ValidationSchema<I>
//     constructor(schema: ValidationSchema<I>) {
//       this.schema = schema
//     }
  
//     validateField = (name, values) => 'not implemented'
    
//     validate: (inputs: I) => Errors<I> = inputs => {
//       return Object.keys(this.schema).reduce((errors, key) => {
//         let errorMessage
//         const validators = this.schema[key]
//         const value = inputs[key]
//         for (const i of Object.keys(validators)) {
//           const validator = validators[i]
//           const res = validator(value)
//           if (res) {
//             errorMessage = res
//             break
//           }
//         }
//         if (errorMessage) {
//           console.log(errorMessage)
//           errors[key] = errorMessage
//         }
//         return errors
//       }, {})
//     }
//   }
  
//   const result = new Validation(rules).validate({ name: "", age: "27", occupation: "crime", email: "someone.com" })
  
//   console.log(result)