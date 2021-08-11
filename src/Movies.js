import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 class Movies extends Component {
    render() {
        return (
            <div>           
  <Card>
    <Card.Img variant="top" src= {this.props.imgUrl} />
    <Card.Body>
      <Card.Title>{this.props.filmTitle}</Card.Title>
      <Card.Text>
       {this.props.over}{this.props.released}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{this.props.avg} {this.props.total} {this.props.pop}</small>
    </Card.Footer>
  </Card>
  
            </div>
        )
    }
}

export default Movies
