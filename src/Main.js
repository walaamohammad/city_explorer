import React, { Component } from 'react';
import axios from 'axios';

import Map from './Map'
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "0.0",
            lon: "0.0",
            cityName: "",
            showMap: false,
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
        let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${e.target.searchtxt.value}&format=json`
        axios.get(url).then(res => {
            console.log(res.data[0])
            this.setState({
                cityName: res.data[0].display_name,
                lat: res.data[0].lat,
                lon: res.data[0].lon,
                showMap: true
            })
        });

    }

    render() {
        return (
            <div>
                <h1> City location</h1>
                <form onSubmit={(e) => { this.submitHandler(e) }}>
                    <input name="searchtxt" type="text" placeholder="search"></input>
                    <input type="submit" value="Explore"></input>
                </form>
                {this.state.showMap &&
                    <Map imgsrc={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}`} cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon}></Map>
                }
            </div>

        )
    }
};

export default Main;
