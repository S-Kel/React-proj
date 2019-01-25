import React from 'react'
import {
  Grid,
  Segment,
  Header,
  Form,
  Input,
  Button,
  Icon
} from 'semantic-ui-react';

function HostDetailsForm({ options, onSubmit, onChange, onClick, createLink, newSocial, social}) {
  return (
    <Grid textAlign='center' >
      <Grid.Column width={10}>
        <Segment raised>
          <Header sub color='red' content='Your Details' />
          <Form onSubmit={onSubmit}>
            <Form.Field>
              <input
                style={{ marginTop: 10 }}
                name='firstName'
                onChange={onChange}
                value={''}
                placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <input
                name='lastName'
                onChange={onChange}
                value={''}
                placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <Input
                name='email'
                type='email'
                iconPosition='left'
                onChange={onChange}
                placeholder='Email'>
                <Icon name='at' />
                <input />
              </Input>
            </Form.Field>
            <Form.Field>
              <input
                name='organization'
                onChange={onChange}
                value={''}
                placeholder='Your Organization' />
            </Form.Field>

            <h5>links</h5>
            {/* <Form.Field>
              <input
              name='social-links'
              value={social}
              placeholder="Your links"/>
            </Form.Field> */}
            {social.map((link) => <p>{ link }</p>) }

            <Form.Field inline>
              <Input
                name='social'
                type="url"
                pattern="https?://.+" 
                iconPosition='left'
                value={newSocial}
                onChange={createLink}
                placeholder= "https://example.com"
                required>
                <Icon name='users' circular inverted color='red' />
                <Button color='red' type="button" onClick={onClick}> Add links</Button>
                <input />
              </Input>
            </Form.Field>
            
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default HostDetailsForm;
