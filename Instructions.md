# Task : Provide an API to create Custom form

### API

- defining - createCustomForm()
- Editing - updateCustomForm()
- Submitting - submitCustomForm()

### Field Types:

- Plain text box
- Email text box
- Single select dropdown
- Boolean field
- File field

### Conditional Fields

A field can be in hidden state when it depends on another field, with a condition. e.g., `Work Permit Type` it is intially not visible unless user select yes for `Do Have Work permit in US ?` , if applicant selects no , he/she won't be shown the field.

Condition can be boolean equal to true/false, or equal to a single select string value

## Create Form with Fields

Create initial form with a name and a default theme,if it is not provided.
The form can be in pre-viewed and tested (showing dummy input form and save as report) before submitted.

## Edit Form Fields

A Custom Form created/stored by the user can be edited by adding / removing or changing fields.

Changes on existing fields are limited to changing label/text
Adding or removing new choices in single selection
Type of the field cannot be changed. e.g., from text=> single selection.

## Save Form Data

Validation of form should be handled by the frontend/client and send data for saving when it is verified and validated.
