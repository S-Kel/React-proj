export default values => {
 const errors = {}
 if (!values.first_name) {
  errors.first_name = 'Required'
 }
 if (!values.last_name) {
  errors.lastName = 'Required'
 }
 if (!values.email) {
  errors.email = 'Required'
 }
 if (!values.organisation) {
  errors.organisation = "Required";
 }
 if (!values.description) {
  errors.description = "Required";
 }
 if (!values.suburb) {
  errors.suburb = "Required";
 }
 if (!values.zipCode) {
  errors.zipCode = "Required";
 }
 if (!values.local_council_details) {
  errors.local_council_details = "Required";
 }
 // if (!values.age) {
 //  errors.age = 'Required'
 // } 
 // else if (isNaN(values.age)) {
 //  errors.age = 'Must be a number'
 // }
 return errors
}
