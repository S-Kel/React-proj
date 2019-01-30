import React, { Component } from 'react'
import { connect } from "react-redux";
import {
    Grid,
    List,
    Segment,
    Header,
    Form,
    Checkbox,
    Button,
    Dropdown,
    Label,
    Input
} from 'semantic-ui-react';
import { Field, FormSpy } from "react-final-form";

export default class EOIDetails extends Component {

    constructor(props) {
        super(props);
     this.state = {
            firstName: "Matt",
            lastName: "Martin",
            email: "ouhefohOHF@gmail.com",
            organization: "organizee",
            description: "iuhefuhwohgfowjroisiogjoijgvoiaj0jjer0gjapijgpiajivjgapivjpjvisdjvlhjslbdgj;sdjbpjapijb;pdsmpobjaepoi",
            volunteers: 6,
            checked: false,
            datePicker: "around spring",
            val_date: false,
            suburb: "yo town",
            zipCode: 9000,
            country: "straya",
            val_place: false,
            council: "council",
            localCouncil: "concil tie",
            val_council: false,
            keyPeople: "my mum"
        }
    }

    handleToggle = () => {
        this.setState({
            checked: !this.state.checked
        })
    }

        render() {
            console.log('Hello from Confirm Form', this.props)
            const { handleSubmit, prevStep } = this.props;
            const { values } = this.state;

            if (!this.state) return null;
            const { firstName,
                lastName,
                email,
                organization,
                description,
                volunteers,
                datePicker,
                suburb,
                zipCode,
                country,
                council,
                localCouncil,
                keyPeople } = this.state;
            return (
                <Grid textAlign='center' >
                    <Grid.Column width={10}>
                        <Segment inverted style={{ textAlign: "justify" }}>
                            <Form>
                                <List divided inverted relaxed>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                First Name
                                                </List.Header>
                                            {firstName}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Last Name
                                            </List.Header>
                                            {lastName}
                                        </List.Content>
                                        
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Your Email Address
                                            </List.Header>
                                            {email}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Your Organization Name
                                            </List.Header>
                                            {organization}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Description of Event
                                            </List.Header>
                                            {description}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Do you have 6-10 Volunteers?
                                            </List.Header>
                                            {volunteers && <div>Yes</div>}
                                            <Checkbox checked={this.state.checked} onChange={this.handleToggle} />
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                When Would You like to hold Your Event?
                                            </List.Header>
                                            {datePicker}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Suburb
                                            </List.Header>
                                            {suburb}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Postal/Zip Code
                                            </List.Header>
                                            {zipCode}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Country
                                            </List.Header>
                                            {country}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Do You have a relationship with your local Counci?
                                            </List.Header>
                                            {localCouncil && <div>Yes</div>}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538l" }}>
                                                Details of Your Local Council
                                            </List.Header>
                                            {council}
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header style={{ color: "#cb3538" }}>
                                                Key People Within Your Organization
                                            </List.Header>
                                            {keyPeople}
                                        </List.Content>
                                    </List.Item>
                                </List>
                               
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
            )
        }
    }



const styles = {
    button: { margin: 15 }
}

