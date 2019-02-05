import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { push } from 'react-router-redux';
import {
  Card,
  Button,
  Icon,
  Image,
  Dropdown,
} from "semantic-ui-react";

// local Imports
import FlashMessage from "../forms/Messages/FlashMessage";
import { fetchEventsList, loadEventsList } from '../../redux/actions/eventsListAction';
import PaginateEventsList from "./PaginateEventsList";
class AdminDashboard extends Component {
    state = { data:[
        {id: 1, name: "Mitchell Heiser", organisation: "company1", createdAt:"1/2/19", shortlisted: true},
        {id: 2, name: "test2", organisation: "company2", createdAt:"2/2/19", shortlisted: false}
    ] }

    handlePaginationChange = (evt, page)=>{
        const { loadEventsList, history, eventLoadError } = this.props;
        if (eventLoadError) return;
        loadEventsList(page)
        history.push(`?page=${page.activePage}`)
        // history.push(`${history.location.pathname}?page=${page.activePage}`)
        // history.push({ pathname: history.location.pathname, search: `?page=${new URLSearchParams({ clientId: page.activePage }).toString()}`});
    }
    render() { 
        console.log('This.props', this.props)
        console.log('This.props.page', this.props.page)
        const {events} = this.props;
        // Pagination
        const per_page = 5; //FOR TESTING PURPOSES ONLY & IS TO BE REPLACED
        const pages = Math.ceil(events.length/per_page);
        const current_page = this.props.page;
        const start_offset = (current_page - 1) * per_page;
        let start_count = 0;

        // Render
        const buildCards = events.map((Data, index) => {       
            if(index >= start_offset && start_count < per_page){
                start_count++;
                return(
                    <Card.Group key={index} centered>
                        <Card color="red" fluid>
                            <Card.Content color="red">
                            <input type="hidden" value={Data.id} />
                            <Card.Header key={index}>{Data['title']}</Card.Header>
                            <Card.Meta key={Data.createdAt}>
                                {Data.createdAt}
                            </Card.Meta>
                            <Card.Description >
                                {Data['body'].slice(0, 70) + '...'}
                            </Card.Description>
                            <Button style={{marginTop: '15px'}} animated inverted color="red">
                                <Button.Content visible>VIEW</Button.Content>
                                <Button.Content hidden>
                                <Icon name="arrow right" />
                                </Button.Content>
                            </Button>
                            <div>
                                {Data.shortlisted ? (
                                <Image
                                    floated="right"
                                    size="mini"
                                    src="/Assets/WBGS-logo.png"
                                />
                                ) : (
                                <Image
                                    floated="right"
                                    size="mini"
                                    src="/Assets/WBGS-logo dulled.png"
                                />
                                )}
                            </div>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                    )}else return null
                });

        return (  
            <React.Fragment>
            <div className="filter">
                <Dropdown color="red" text='Filter By' icon='filter' floating labeled button className='icon'>
                    <Dropdown.Menu >
                    <Dropdown.Header icon='tags' content='Filter by tag'/>
                    <Dropdown.Item>Shortlisted</Dropdown.Item>
                    <Dropdown.Item>See All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
             </div>
            <div>
                <FlashMessage 
                color='teal' 
                message={'You have successfully logged in...   '} 
                />
            </div>
            <div><PaginateEventsList activePage={current_page} onPageChange={this.handlePaginationChange} totalPages={pages} /></div>
            <div className="cardContainer">{buildCards}</div>            
            <div><PaginateEventsList activePage={current_page} onPageChange={this.handlePaginationChange} totalPages={pages} /></div>
            </React.Fragment>
        );
    }
}

// const mapStateToProps =(state, location) =>{
//     console.log("state | Location", state, location);
//     console.log("location.location.search.split('='[1]): ", location.location.search.split('=')[1]);
//     const page = location.location.search.split('=')[1];
//    return {
//       events: state.events.eventsList, 
//       page: Number(page) || 1,
//     //   dispatch:
//     };    
// } 
const mapStateToProps = (state, ownProps) => ({
  events: state.events.eventsList,
  page: Number(ownProps.location.search.split('=')[1]) || 1,
  eventLoadError: state.events.eventError,
});

export default withRouter(
  connect(
    mapStateToProps,
    { fetchEventsList, loadEventsList, }
  )(AdminDashboard)
);