import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Map';
import Weather from './Weather';
import Movies from './Movies';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: "0.0",
            lon: "0.0",
            cityName: "",
            showMap: false,
            weatherArr: [],
            weatherData: [],
            displayWeather: false,
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
            console.log(res.data);
            this.getWeather(res.data[0].lat, res.data[0].lon)
          this.getMovies(e.target.searchtxt.value)
        })
            // .catch((error) => {
            //     this.setState({
            //         errorMsg: error,
            //         displayError: true,
            //     });

            // });


    };



    getWeather = (lat, lon) => {
        let url = `https://city-explorer-w.herokuapp.com/getWeather/${lat}/${lon}`
        axios.get(url).then(res => {
            this.setState({
                weatherData: res.data,
                displayError: false,
                displayWeather: true,
            });
        // })
        //     .catch((error) => {
        //         this.setState({
        //             errorMsg: error,
        //             displayError: true,
        //             weatherArr: [] // if data is false empty array
        //         });
         })
    }

    getMovies = (city) => {
        let url = `https://city-explorer-w.herokuapp.com/getMovies/${city}`
        axios.get(url).then(res => {
           console.log(res.data)
            this.setState({
                movieData: res.data,
                displayError: false,
                displayMovie: true,
            });
        })
            // .catch((error) => {
            //     this.setState({
            //         errorMsg: error,
            //         displayError: true,
            //         displayMovie: false,
            //         movieArray: [] 
            // // if data is false empty array
            //     });
            // })
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

                {this.state.displayWeather && <>  {this.state.weatherData.map((ele) => {
                    return (<Weather dateOfCountry={ele.date} description={ele.description} />)

                })} </>
                }

                {this.state.movieData && <>  {this.state.movieData.map((ele) => {
                    return (<Movies filmTitle={ele.title} over={ele.overview} avg={ele.average_votes} total={ele.total_votes}
                        imgUrl={ele.image_url} pop={ele.popularity} released={ele.released_on} />)
                })

                }
                </>
                }
                </div>)}}

             export default Main;
     