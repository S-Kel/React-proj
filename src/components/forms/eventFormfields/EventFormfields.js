import React from 'react'
import { Form, Label,Input, Icon} from 'semantic-ui-react';

export const InputText = (props) => {
 const { placeholder, iconPosition, type, input, meta: { active, error, touched } } = props;
 return (
   <div className={active ? "active" : ""}>
    <Input
     label={placeholder}
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
