import React, { Component } from 'react';
import {
  Col,
  Row,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

export default class Apartments extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>
            {this.props.apartments.map((apt, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='apt-street-1'>
                        {apt.street_1}
                      </span>
                    </h4>
                  }>
                  <span className='apt-city'>
                    {apt.city}
                  </span>
                  <span className='apt-state'>
                    {apt.state}
                  </span>
                  <span className='apt-postal-code'>
                    {apt.postal_code}
                  </span>
                  <span className='apt-country'>
                    {apt.country}
                  </span>
                  <span className='apt-name'>
                    {apt.name}
                  </span>
                  <span className='apt-phone-number'>
                    {apt.phone_number}
                  </span>
                  <span className='apt-contact-hours'>
                    {apt.contact_hours}
                  </span>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}