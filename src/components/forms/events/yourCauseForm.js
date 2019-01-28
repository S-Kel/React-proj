import React from 'react';
import { Field } from "react-final-form";
import {
  Grid,
  Segment,
  Header,
  Form,
  Button,
  Label
} from 'semantic-ui-react';

import {targetOptions} from '../optionsData/targetOptions';
import { InputTextArea, InputCheckBox, DropdownMenu } from '../eventFormfields/EventFormfields';

function YourCauseForm(props) {
  const { handleSubmit, pristine, submitting, invalid, prevStep, nextStep, values } = props;
  console.log('Values within CauseForm', values)
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <Header
            style={{ marginBottom: 10 }}
            sub color='teal'
            content='Your Cause' />
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <Label style={{ background: '#fefafa', padding: 10 }}>
                Descript as to why you would like to hold the world's biggest garage sale.
                Otherwise, enter a url link to a video
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum non,
                delectus et aperiam provident numquam hic nihil id voluptatum eius in impedit blanditiis. Molestiae quas suscipit illum minima voluptatum! ...
              </Label>
              <Field
                name='description'
                autoHeight
                minHeight={{ minHeight: 150 }}
                placeholder='Description or video url link/why?'
                component={InputTextArea}
                subscription={{ value: true, active: true, error: true, touched: true }}
              />
            </Form.Field>
            <Form.Field>
              <Field
                name="volunteers"
                type="checkbox"
                label="Do you have 6-10 Volunteers?"
                component={InputCheckBox}
                subscription={{ value: true, active: true, error: true, touched: true }} />
            </Form.Field>
            <Form.Field>
              <Field
                name="expectedTarget"
                type="dropdown"
                label="Select your expected Target"
                component={DropdownMenu}
                options={targetOptions}
                subscription={{ value: true, active: true, error: true, touched: true }} />
            </Form.Field>
            <Button label="Continue" primary disabled={invalid ||submitting || pristine} onClick={nextStep} />
            <Button label="Back" primary={false} disabled={invalid || submitting || pristine} onClick={prevStep} />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default YourCauseForm;
