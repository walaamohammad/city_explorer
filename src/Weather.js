import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


class Weather extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Text>
                        {this.props.dateOfCountry}
                        {this.props.description}
                    </Card.Text>
                </Card>

            </div>
        )
    }
}

export default Weather
