import React, { Component } from "react";
import { connect } from "react-redux";
import {
 Grid,
 List,
 Segment,
 Header,
 Form,
 Checkbox,
 Button,
 Dropdown,
 Label,
 Input
} from 'semantic-ui-react';

import {showResults } from './EventForm';

// import { Field, FormSpy } from "react-final-form";

import { getFormState } from "../../../redux/reducers/reduxFormReducer";
import FormStateToRedux from "../FormStateToRedux";
// import { InputTextArea, InputCheckBox, DropdownMenu } from '../eventFormfields/EventFormfields';


// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// export const showResults = async values => {
//  await sleep(500);
//  window.alert(JSON.stringify(values, undefined, 2));
// }


class Confirm extends Component {
 confirmSubmit = e => {
  e.preventDefault();
  showResults(this.props.state.values);
  // Process your form i.e. send data to API
 }

 // Go back to previous page
 // back = e => {
 //  e.preventDefault();
 //  this.props.prevStep();
 // }onClick={this.confirmSubmit}

 render() {
  const {handleSubmit, prevStep} = this.props;
  const { values } = this.props.state;

  if (!values) return null;
  const { firstName,
   lastName,
   email,
   organization,
   description,
   volunteers,
   datePicker,
   suburb,
   zipCode,
   country,
   councilDetails,
   localCouncil,
   keyPeople } = values;
  return (
   <Grid textAlign='center' >
    <Grid.Column width={10}>
      <Segment inverted style={{ textAlign: "justify", padding: 20 }}>
      {/* <FormStateToRedux form="confirmForm" /> */}
       <Form onSubmit={handleSubmit}>
       <List divided inverted relaxed>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           First Name
          </List.Header>
          {firstName}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Last Name
                      </List.Header>
          {lastName}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Your Email Address
          </List.Header>
          {email}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Your Organization Name
          </List.Header>
          {organization}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Description of Event
         </List.Header>
          {description}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Do you have 6-10 Volunteers?
          </List.Header>
          {volunteers && <div>Yes</div>}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
            When Would You like to hold Your Event?
          </List.Header>
          {datePicker}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Suburb
         </List.Header>
          {suburb}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Postal/Zip Code
         </List.Header>
          {zipCode}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
            Country
          </List.Header>
          {country}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Do You have a relationship with your local Counci?
          </List.Header>
          {localCouncil && <div>Yes</div>}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Details of Your Local Council
          </List.Header>
          {councilDetails}
         </List.Content>
        </List.Item>
        <List.Item>
         <List.Content>
          <List.Header style={{ color: "teal" }}>
           Key People Within Your Organization
                      </List.Header>
          {keyPeople}
         </List.Content>
        </List.Item>
       </List>
       <br />
       {/* <button type="submit" > Submit </button> */}
       <Button type='submit' label="Confirm" color='red' style={styles.button}  />
       <Button label="Back" primary={false} style={styles.button} onClick={prevStep} />
       </Form>
      </Segment>
    </Grid.Column>
   </Grid>
  )
 }
}

const styles = {
 button: { margin: 15 }
}

const mapPropsToTypes = (state, ownProps) => ({
 state: getFormState(state, ownProps.form)
});
export default connect(mapPropsToTypes)(Confirm);
// export default Confirm;

