import React from 'react'
import { Form, Label, TextArea, Input, Checkbox, Icon } from "semantic-ui-react";

export const InputText = (props) => {
 const { placeholder, type, input, meta: { active, error, touched } } = props;
 return (
   <div className={active ? "active" : ""}>
    <Form.Input
    //  label={placeholder}
     type={type}
     placeholder={placeholder}
     {...input}
    />
    {error && touched && <span>{error}</span>}
   </div>
 );
}

export const EmailInputText = (props) => {
 const { placeholder, iconPosition, type, input, meta: { active, error, touched } } = props;
 return (
  <div className={active ? "active" : ""}>
   <Input
    label={placeholder}
    type={type}
    placeholder={placeholder}
    iconPosition={iconPosition}
    {...input}
    >
      <Label>
         <Icon name='at' />
      </Label>
      <input />
   </Input>
   {error && touched && <span>{error}</span>}
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