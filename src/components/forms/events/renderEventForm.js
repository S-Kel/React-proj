import React, { Component } from 'react';
import { Field, FormSpy } from "react-final-form";
// import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
 Grid,
 Segment,
 Header,
 Form,
 Checkbox,
 Button,
 Dropdown,
 Label,
 Input
} from 'semantic-ui-react';

import HostDetailsForm from "./hostDetailsForm";
import CreateCauseForm from "./yourCauseForm";
import CommunityDetailsForm from "./yourCommunityForm";
import ConfirmDetailsForm from "./Confirm";

// import '../../../App.css';
// import FormStateToRedux from "../FormStateToRedux";
// import RenderCount from "../common";
// import InputText from "../forms/InputText";
// import CreateCauseForm from "./UserCauseForm";
// import CommunityDetailsForm from "./communityDetailsForm";
// import ConfirmDetailsForm from "./Confirm";

// import FadeTransition from "../CSSTransitions/fadeTransition";
// import SlideTransition from "../CSSTransitions/slideTransition";

const CollectUserDetailsForm = (props) => {
 const { handleSubmit, values, pristine, submitting, invalid, nextStep, prevStep, page } = props;
 console.log("hasValidationErrors", invalid, pristine, submitting);
 return (
   <div>
     {/* <CSSTransition key={`ABXC-AX0`} in={true} appear timeout={4500} classNames="fade"> */}
     <HostDetailsForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />
     {/* </CSSTransition> */}

     {console.log("Step: ", page)}
     {console.log("page===1: ", page === 1)}
     {console.log("page===2: ", page === 2)}
     {console.log("page===3: ", page === 3)}
     {
         (page === 1 && <CreateCauseForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />)
      || (page === 2 && <CommunityDetailsForm values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />)
       || (page === 3 && <ConfirmDetailsForm form='userForm' handleSubmit={handleSubmit} values={values} pristine={pristine} submitting={submitting} invalid={invalid} nextStep={nextStep} prevStep={prevStep} page={page} />)
    }
     {/* <TransitionGroup className='card-container'> */}
     {/* {
     (step === 1 &&
      <CSSTransition
       key={step}
       in={step === 1}
       appear={step === 1}
       timeout={500}
       // mountOnEnter={true}
       // unmountOnExit={true}
       classNames="slide">
       <div className='box-container'>
        <CreateCauseForm step={step} nextStep={nextStep} prevStep={prevStep} />
       </div>
      </CSSTransition>)
     || (step === 2 &&
      <CSSTransition
       key={step}
       in={step === 2}
       appear={step === 2}
       timeout={500}
       classNames="slide">
       <div className='box-container'>
        <CommunityDetailsForm step={step} nextStep={nextStep} prevStep={prevStep} />
       </div>
      </CSSTransition>)
     || (step === 3 &&
      <CSSTransition
       key={step}
       in={step === 3}
       appear={step === 3}
       timeout={500}
       classNames="slide">
       <div className='box-container'>
        <ConfirmDetailsForm form="userForm" step={step} nextStep={nextStep} prevStep={prevStep} />
       </div>
      </CSSTransition>)
     || null

    } */}
     {/* </TransitionGroup> */}
     <FormSpy subscription={{ values: true }}>
       {({ values }) => <pre>
         <h3 style={{ color: 'red', margin: 20, textAlign: 'center'}}>For Debugging Purposes Only</h3>
            <hr />
            <p style={{color: 'teal',padding: '15px 20px 20px 200px'}}>{JSON.stringify(values, undefined, 2)}</p>
         </pre>}
     </FormSpy>
   </div>
   );
}

export default CollectUserDetailsForm;
