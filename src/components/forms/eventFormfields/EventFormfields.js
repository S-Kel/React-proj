import React from 'react'
import { Form, Label, TextArea, Input, Checkbox, Popup } from "semantic-ui-react";
import "../../../app/App.css";
import { Segment, List, Button } from 'semantic-ui-react';
import { Field } from "react-final-form";

const style = {
  opacity: 0.87,
  color: 'red'
};

export const InputText = (props) => {
  const { placeholder, position, icon, iconPosition, type, input, meta: {name, active, error, touched } } = props;
 return (
   <div className={active ? 'active' : ''}>
    <Popup 
      color='red'
      key={placeholder} 
      trigger={< Form.Input name={name} type={type} icon={icon} iconPosition={iconPosition} placeholder={placeholder} {...input} />}
      header={placeholder}
      content={error}
      position={position ? position : 'right center'}
      style={style}
      // on='focus'
      //  open={!error ? false : null}      
      />
   </div>
 );
}

export const EmailInputText = (props) => {
 const { style, placeholder, iconPosition, type, input, meta: { active, error, touched } } = props;
 return (
  <div className={active ? "active" : ""}>
   <Input
    icon='at'
    style={style}
    type={type}
    placeholder={placeholder}
    iconPosition={iconPosition}
    {...input}
    />    
   {error && touched && <Label basic color='red' pointing>{error}</Label>} 
   {/* {error && touched && <span>{error}</span>}  */}
  </div>
 );
}

export const InputTextArea = (props) => {
  const { minHeight, autoHeight, placeholder, type, input, meta: { active, error, touched } } = props;
  return (
    <div className={active ? "active" : ""}>
      <TextArea
        type={type}
        style={minHeight}
        autoHeight={autoHeight}
        label={placeholder}
        placeholder={placeholder}
        {...input}
      />
      {error && touched && <span>{error}</span>}
    </div>
  );
}

export const InputCheckBox = (props) => {
  const { input: { value, onChange, ...input }, label, type, meta: { active, error, touched } } = props;
  return (
    <div className={active ? "active" : ""}>
      <Checkbox
        {...input}
        label={label}
        type={type}
        onChange={(e, data) => onChange(data.checked)}
      />
      {error && touched && <span>{error}</span>}
    </div>);
}

export const DropdownMenu = ({ active, input, type, label, multiple, options, meta: { touched, error } }) => {
  return( 
    <div className={active ? "active" : ""}>
      <Form.Dropdown
        {...input}
        // label={label}
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        search
        selection
        placeholder={label}
        options={options}
      />
      {error && touched && <span>{error}</span>}
    </div>
    )
}
export const DatePicker = (props) => {
  const { icon,style, input, iconPosition, label, type, meta: { active, error, touched } } = props;
  return (
    <div className={active ? "active" : ""}>
      <Form.Input
        {...input}
        type={type}
        iconPosition={iconPosition}
        icon={icon}
        style={style}
        placeholder={label}>
        </Form.Input>
      {error && touched && <span>{error}</span>}
    </div >
  );
}

export const RenderSocials = ({fields}) => {
  return (
    <div>         
    {/* <List> */}
      <Form.Group>     
        <Form.Field width={16}>   
          <List>{fields.map((field, index)=>
            <List.Item key={index}>
              <Form.Group> 
                <Form.Field width={13}>
                  <Field 
                    name={field} 
                    type= 'text'
                    component={InputText}
                    placeholder='Add Your Social Media link'
                  />
                </Form.Field>
                <Form.Field width={3}>
                  <Form.Button
                    type='button'
                    content='Remove'
                    onClick={() => fields.remove(index)}
                  />
                </Form.Field>                
              </Form.Group>
              {fields.error && <List.Item className='error' >{fields.error}</List.Item>}
            </List.Item>
            )}
          </List>
        </Form.Field>
      </Form.Group>
    {/* </List> */}
      <Form.Group>
        <Form.Field style={{ textAlign: 'right' }} width={13} >
          <label>Your links to your social media pages.</label>
        </Form.Field>
        <Form.Field width={3}>
          <Form.Button type="button"  negative content='Add Link' onClick={() => fields.push()} />
        </Form.Field>
      </Form.Group>   
    </div>
  );
}