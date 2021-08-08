import React, { Component } from 'react'
import { Col,Card } from 'react-bootstrap';
export class Map extends Component {

    render() {
        return (
            <div>
                <Col>
                
                <Card border="primary" style={{ width: '18rem' }}
    
    className="mb-2"
  >
    <Card.Header>city location</Card.Header>
    <Card.Body>
      <Card.Title>{this.props.cityName}</Card.Title>
    </Card.Body>
  </Card>
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imgsrc} alt='alt'  />
  <Card.Body>
    <Card.Text>
    {this.props.lat}
    </Card.Text>
    <Card.Text>
    {this.props.lon}
    </Card.Text>
  </Card.Body>
</Card>
  </Col>

            </div>
        )
    }
}

export default Map;
