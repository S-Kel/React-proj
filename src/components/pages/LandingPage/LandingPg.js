import React, { Component } from 'react'
import { connect } from "react-redux";
import {Grid, Cell} from 'react-mdl'
import GarageSaleVid from './Youtube'
import InfoPg from './InfoPg';
import { Button } from 'semantic-ui-react';
import FlashMessage from "../../forms/Messages/FlashMessage";

class LandingPg extends Component {

onClickMore() {
    document.getElementById('info').scrollIntoView()
}

  render() {
      const {loggedIn, loggedOut, role} = this.props;
      console.log('This.props.loggedIn | role from landing page', this.props.loggedIn)
    return (
      <div>
        <Grid className="landing-grid">
        {
          loggedIn && role === 'user' &&
            <FlashMessage 
            color='teal' 
            message={'You have signed in successfully...   '} 
            />
        }
        {
          loggedOut && 
            <FlashMessage
                color='teal'
                message={'You have signed out successfully...   ' }
                />

        }
            <div className="banner-text">
                <img src="/Assets/WBGS-logo.png" className="logo"/>
                <hr/>  
                <GarageSaleVid videoId='SkiTGS_ThA0'/>   
            </div>
            <div className="call-to-act">
            <div className="call1">
                <p>WE BELIEVE WE CAN MAKE A POSITIVE IMPACT ON PEOPLE’S LIVES AND 
                THE FUTURE OF THE PLANET THROUGH THE EVENTS AND EXPERIENCES WE CREATE.</p>
            </div>
        </div>
        </Grid>
        <div>
            <Button inverted size="massive" floated="right" onClick={this.onClickMore}> Find out more </Button>
        </div>          
        <InfoPg/>
        <div className="social-links">
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square" aria-hidden="true" />
                    </a>
        </div>   
    </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  loggedOut: state.auth.logout,
  role: state.auth.authenticatedUserRole,
});

export default connect(mapStateToProps, { })(LandingPg);