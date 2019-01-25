import React, { Component } from 'react';

import HostDetailsForm from './hostDetailsForm';
import YourCauseForm from './yourCauseForm';
import YourCommunityForm from './yourCommunityForm';
import  isUri from 'valid-url';
var validUrl = require('valid-url');


class CreateEventForm extends Component {
  state = {
    options:
      [
        { value: '1', text: '$100k - $200k' },
        { value: '2', text: '$200k - $300k' },
        { value: '3', text: '$300k - $400k' },
        { value: '4', text: '$400k - $500k' },
        { value: '5', text: '$500k - $600k' },
        { value: '6', text: '$600k - $700k' },
        { value: '7', text: '$800k+' },
      ],
      newSocials:'',
      socials:[]
  }
  changeNewSocial = event =>{ 
    this.setState({ newSocials: event.target.value })
    
  }

  createNewSocial = event =>{
    event.preventDefault()
    if (validUrl.isWebUri(this.state.newSocials)){
      console.log('Looks like an URI');
      const socials = [...this.state.socials, this.state.newSocials]
      this.setState({ socials, newSocials:'' })
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
    return (
      <div>
        <HostDetailsForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          options={this.state.options}
          onClick={this.createNewSocial}
          createLink={this.changeNewSocial}
          newSocial={this.state.newSocials}
          social= {this.state.socials}
        />
    
        <YourCauseForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          options={this.state.options}
        />
        <YourCommunityForm
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          options={this.state.options}
        />
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