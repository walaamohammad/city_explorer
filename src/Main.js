import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Map';
import Weather from './Weather';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "0.0",
            lon: "0.0",
            cityName: "",
            showMap: false,
            weatherArr:[]
        }
    }
    submitHandler = (e) => {
        e.preventDefault()
        let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${e.target.searchtxt.value}&format=json`
    
        axios.get(url).then(res => {
            //console.log(res.data[0])
            this.setState({
                cityName: res.data[0].display_name,
                lat: res.data[0].lat,
                lon: res.data[0].lon,
                showMap: true,
                displayError: false,
                errorMsg: "",
            
            }) 
        })
         .catch((error)=> {
                this.setState ({
                  errorMsg: error,
                  displayError: true,
                });
                this.weather(this.state.cityName)
        });

   
    };

    weather=(city)=>{
   let url     = `http://localhost:8000/weather/${city.split(',')[0]}`
   axios.get(url).then(res => {
    //console.log(res.data[0])
    this.setState({

        displayError: false,
       
    })
})
 .catch((error)=> {
        this.setState({
          errorMsg: error,
          displayError:true,
         errorMsg:` the weather not found`,
          weatherArr:[] // if data is false empty array
        });
    
 
})
}
    render() {
        return (
            <div>
            {this.state.displayError && (
                <p key={1} variant={"danger"}>
                  {this.state.errorMsg} City not Found
                </p>
              )}
                <h1> City location</h1>
                <form onSubmit={(e) => { this.submitHandler(e) }}>

                    <input name="searchtxt" type="text" placeholder="search"></input>
                    <input type="submit" value="Explore"></input>
                </form>
                {this.state.showMap &&
                    <Map imgsrc={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.lat},${this.state.lon}`} cityName={this.state.cityName} lat={this.state.lat} lon={this.state.lon}></Map>
                }
                      {this.state.weatherArr && <>  {this.state.weatherArr.map((ele)=>{
          return (<Weather dateOfCountry={ele.date} description={ele.description}/>) 
         })} </> }
            </div>

        )
    }
};

export default Main;