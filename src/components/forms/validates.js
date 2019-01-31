var validUrl = require("valid-url");
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
 if(!values.socials || !values.socials.length){
  errors.socials ={_error: 'At least one social media link must be entered'}
 }else{
  const socialsArrayErrors=[];
  values.socials.forEach((social, idx)=>{
   const socialMediaErrors ={};
   if(!social || !social.name){
    socialMediaErrors.name = "Required";
    socialsArrayErrors[idx] = socialMediaErrors;
   } 
   // console.log("Logged of Social Media Object", social)
   // validUrl.isWebUri(social.name);
   else if (social.name && !validUrl.isWebUri(social.name)){
    socialMediaErrors.name = "Not a valid url";
    socialsArrayErrors[idx] = socialMediaErrors;
   }
   return socialMediaErrors;
  });
  if (socialsArrayErrors.length)
   errors.socials = socialsArrayErrors;
 }
 // if (!values.age) {
 //  errors.age = 'Required'
 // } 
 // else if (isNaN(values.age)) {
 //  errors.age = 'Must be a number'
 // }
 return errors
}
