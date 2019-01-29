import React, { Component } from 'react';

import { Form } from "react-final-form";

// import HostDetailsForm from './hostDetailsForm';
import RenderEventForm from '././renderEventForm';
import YourCauseForm from './yourCauseForm';
import YourCommunityForm from './yourCommunityForm';
import isUri from 'valid-url';
import validate from '../validates';
var validUrl = require('valid-url');


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
}

class CreateEventForm extends Component {
  state = { page: 0 }
  nextStep = () => {
    this.setState({ page: this.state.page + 1 });
    console.log('Page No:', this.state.page)
  }
  prevStep = () => {
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));
  }
  changeNewSocial = event => {
    this.setState({ newSocials: event.target.value })

  }

  createNewSocial = event => {
    event.preventDefault()
    if (validUrl.isWebUri(this.state.newSocials)) {
      console.log('Looks like an URI');
      const socials = [...this.state.socials, this.state.newSocials]
      this.setState({ socials, newSocials: '' })
    } else {
      alert("Please enter a valid URL.");
      console.log('Not a URI');
    }


  }

  // validateUrl = () => {
  //   if (validUrl.isWebUri(this.state.newSocials)){
  //     console.log('Looks like an URI');
  // } else {
  //   alert("Please enter a valid URL.");
  //     console.log('Not a URI');
  // }
  // } // is_url = (str) =>{
  // RegExp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  //       if (RegExp.test(str))
  //       {
  //         alert("Please enter a valid URL.");
  //       return false;
  //     } else {
  //       return true;
  //   }
  // }

  handleSubmit = e => { }
  handleInputChange = e => { }
  render() {
    // console.log("Checking Props inside Form", this.props);

    return (
      <div>
        <Form
          onSubmit={showResults}
          // decorators={[focusOnError]}
          validate={validate}
          initialValues={{}}
          subscription={{ invalid: true, submitting: true, pristine: true }}
          page={this.state.page}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          render={RenderEventForm}

        // ({ handleSubmit, values, pristine, submitting, invalid, nextStep, prevStep, page }) => (
        //     <form onSubmit={handleSubmit}>              
        //     <HostDetailsForm nextStep={nextStep} prevStep={prevStep} page={page} />
        //     {console.log('Page inside forms:', page)}
        //     {                
        //       (page === 1 &&
        //         <YourCauseForm
        //           onSubmit={this.handleSubmit}
        //           onChange={this.handleInputChange}
        //         />
        //       )
        //       || (page === 2 &&
        //         <YourCommunityForm
        //           onSubmit={this.handleSubmit}
        //           onChange={this.handleInputChange}
        //         />
        //       )
        //     }              

        //     <pre>{JSON.stringify(values, 0, 2)}</pre>
        //     </form>
        // )}
        />

        {/* <HostDetailsForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
        />
    
        <YourCauseForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
        />
        <YourCommunityForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
        /> */}
        {/* <YourNetworkForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          options={this.state.options}
        /> */}
      </div>


    )
  }
}

export default CreateEventForm;