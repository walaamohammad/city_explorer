import React, { Component } from 'react'
import { Col,Card } from 'react-bootstrap';
export class Map extends Component {

    render() {
        return (
            <div>
                <Col>
                <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{this.props.cityName}</Card.Title>
    <Card.Text>
    {this.props.lat}
    </Card.Text>
    <Card.Text>
    {this.props.lon}
    </Card.Text>
    <Card.Text>
      <img src={this.props.imgsrc} alt='alt' />
    </Card.Text>
  </Card.Body>
</Card>
                  
                </Col>

            </div>
        )
    }
}

export default Map
