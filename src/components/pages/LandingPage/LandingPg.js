import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

class LandingPg extends Component {
  render() {
    return (
      <div style= {{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
            <div className="banner-text">
                <h1>World's Biggest Garage Sale</h1>
                <hr/>  
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
            </Cell>
        </Grid>
    </div>
    )
  }
}

export default LandingPg