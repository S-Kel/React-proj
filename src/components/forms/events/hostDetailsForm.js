import React from 'react'
import {
  Grid,
  Segment,
  Header,
  Form,
  Button,
} from 'semantic-ui-react';
import { Field} from "react-final-form";

import FormStateToRedux from "../FormStateToRedux";
import { InputText, EmailInputText} from '../eventFormfields/EventFormfields'

function HostDetailsForm(props) {
  const { handleSubmit, pristine, submitting, invalid, nextStep, page } = props;
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <FormStateToRedux form="userForm" />
          <Header sub color='teal' content='Your Details' style={{ margin: 10 }} />
          <Form onSubmit={handleSubmit}>
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
                <Form.Button floated='center' color='teal' type="button" content='Add links'/>
              </Form.Field>
            </Form.Group>
             {!page && <Button type='button'label="Continue" primary disabled={invalid || submitting || pristine} onClick={nextStep} />}
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default HostDetailsForm;
