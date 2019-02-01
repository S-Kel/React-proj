import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import GarageSaleVid from './Youtube'
import InfoPg from './InfoPg';
import { Button } from 'semantic-ui-react'

class LandingPg extends Component {

onClickMore() {
    document.getElementById('info').scrollIntoView()
}

  render() {
    return (
      <div>
        <Grid className="landing-grid">
            <div className="banner-text">
                <img src="/Assets/WBGS-logo.png" className="logo"/>
                <hr/>  
                <GarageSaleVid videoId='SkiTGS_ThA0'/>
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
            <div>
                <Button inverted color="white" size="massive" floated="right" onClick={this.onClickMore}> Find out more </Button>
            </div>
           
        </Grid>
        <InfoPg/>
    </div>
    )
  }
}

export default LandingPg