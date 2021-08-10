import React, { Component } from 'react';
import { Col,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export class Map extends Component {

    render() {
        return (
            <div>
                <Col>
                <Card
   
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>{this.props.cityName}</Card.Header>
    <Card.Img variant="top" src={this.props.imgsrc} alt='alt'/>
    <Card.Body>
      <Card.Text>
      {this.props.lon}
      </Card.Text>
      <Card.Text>
    {this.props.lat}
    </Card.Text>
    </Card.Body>
  </Card>
                {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imgsrc} alt='alt'/>
  <Card.Body>
    <Card.Title>{this.props.cityName}</Card.Title>
    <Card.Text>
    {this.props.lat}
    </Card.Text>
    <Card.Text> 
    {this.props.lon}
    </Card.Text>
  </Card.Body>
</Card>
                   */}
                </Col>

            </div>
        )
    }
}

export default Map