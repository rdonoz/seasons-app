import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import './style/style/App.css';


class App extends React.Component{
        
    //the only time we direct assignment to this.state
    state={lat: null, errorMessage: ''};


    //data loading
componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        position=> this.setState({lat: position.coords.latitude}),
            //calling setState
        err=> this.setState({errorMessage: err.message})
    );
} 

    //more data loading when stage/props change
componentDidUpdate(){

}

    //cleanup for non-react stuff
componentWillUnmount(){

}


    renderContent(){
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
            }
            if(this.state.errorMessage && !this.state.lat){
                return <div>Error: {this.state.errorMessage}</div>
            }
            return <Loader message="Getting your location..."/>;
    }

    //define render
    //avoid anything besides returning JSX
    render (){
        return (
            <div className="red-border">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));