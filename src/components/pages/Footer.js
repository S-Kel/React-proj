import React from 'react';
import { Grid, Image, Segment  } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab} from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab)

const footer = () => (
  <div className="footer">
  <Grid columns='2'>
    
    <Grid.Row>
      <Grid.Column width={7}>
      <h2>contact</h2>
      </Grid.Column>
      <Grid.Column width={7}> 
        <h2>Social</h2>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={7}>
      <h4>Post:</h4>
        <p>PO Box 509
        Chermside South QLD 4031</p>
      </Grid.Column>
      <Grid.Column width={7}>
      <a  target="_blank" className="Icon" href="https://www.facebook.com/worldsbiggestgaragesale"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
      </Grid.Column>
      
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={7}> 
      <h4>Phone:</h4>
        <p>1300 12 12 97</p>
      </Grid.Column>
      <Grid.Column width={7}>
        <a target="_blank" className="Icon" href="https://twitter.com/WBGS_Global"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      </Grid.Column>
    </Grid.Row>
      

    <Grid.Row>
      <Grid.Column width={7}>
      <h4>Newsletter:</h4>
        <a target="_blank" href="https://worldsbiggestgaragesale.com.au/contact-us/newsletter/">Sign up</a>
      </Grid.Column>
      <Grid.Column width={7}>
        <a  target="_blank" className="Icon" href="https://www.instagram.com/wbgs_global/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      </Grid.Column>
    </Grid.Row>
     
  </Grid>
  <Grid>
      <Grid.Column width={7}>
      <a target="_blank" href="https://worldsbiggestgaragesale.com.au"><img src="/Assets/WBGS-logo.png" className="FooterLogo" /></a>
      </Grid.Column>
  </Grid>
  </div>

)

export default footer