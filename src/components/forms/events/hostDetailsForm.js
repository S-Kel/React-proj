import React from 'react'
import {
  Grid,
  Segment,
  Header,
  Form,
  Button,
} from 'semantic-ui-react';
import { Field } from "react-final-form";

// import {showResults } from './EventForm';

import FormStateToRedux from "../FormStateToRedux";
import { InputText, EmailInputText } from '../eventFormfields/EventFormfields';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
export const showResults = async values => {
  await sleep(500);
  window.alert(JSON.stringify(values, undefined, 2));
}

function HostDetailsForm(props) {
  const {values, form, handleSubmit, pristine, submitting, invalid, nextStep, page } = props;
  console.log('HandleSubmit...', values)
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <FormStateToRedux form="userForm" />
          <Header sub style={styles.DodgerRed} content='Your Details' />
          <Form onSubmit={handleSubmit} >
            <Form.Field>
              <Field
                name='firstName'
                placeholder='First Name'
                component={InputText}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Form.Field>
              <Field
                name='lastName'
                type='text'
                placeholder='Last Name'
                component={InputText}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Form.Field>
              <Field
                name='email'
                type='email'
                label='Email'
                // style={{color: '#cb3538'}}
                iconPosition='left'
                component={EmailInputText}
                placeholder='Email'
                subscription={{ value: true, active: true, error: true, touched: true }}
              >
              </Field>
            </Form.Field>
            <Form.Field>
              <Field
                name='organization'
                type='text'
                placeholder='Your Organization'
                component={InputText}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Form.Group >
              <Form.Field width={12} >
                <Field
                  name='social'
                  type='text'
                  placeholder='Your links to social media pages'
                  component={InputText}
                  subscription={{ value: true, active: true, error: true, touched: true }}
                />
              </Form.Field>
              <Form.Field width={4}>
                <Form.Button style={{ background: '#cb3538', color: '#fefefe' }} type="button" content='Add links' />
              </Form.Field>
            </Form.Group>
            {/* <button type="submit" > Submit </button> */}
            {!page && <Button type='button' label="Continue" color='red' disabled={submitting || pristine} onClick={nextStep} />}
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

const styles = {
  DodgerRed: {
    color: '#9d9d9d',
    fontWeight: 'bold',
    marginBottom: 10
  }
}
export default HostDetailsForm;
