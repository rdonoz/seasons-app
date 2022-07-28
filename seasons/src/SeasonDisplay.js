import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer:{
        text: "Let's go the beach!",
        iconName: 'massive orange sun'
    },
    rainy:{
        text: "Get your umbrella!",
        iconName: 'massive blue umbrella'
    }
}

const getSeason =(lat, month) => {
    if (month > 4 && month <10){
       return lat > 0 ? 'rainy' : 'summer';
    }else{
       return lat > 0 ? 'summer' : 'rainy';
    }
}

const SeasonDisplay= (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName}=seasonConfig[season]

    
    return <div className={`season-display ${season}`}>
                <i className={`icon-left ${iconName} icon`}/> 
                    <h1>{text}</h1>
                <i className={`icon-right ${iconName} icon`}/> 
                
            </div>;
        
}

export default SeasonDisplay;