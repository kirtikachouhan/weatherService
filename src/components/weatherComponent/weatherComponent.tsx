import React from "react";
import PropType from "prop-types";

WeatherComponent.propTypes = {
    pincodeData: PropType.string
}
function WeatherComponent({pincodeData}: {pincodeData:string}){
 let weatherData:any = {
    "560068": [
        {
            "Place": "Begur",
            "Temperatue": "56",
            "TemperatureDegree": "Celcius",
            "Date": "24/05/2022"
        },
        {
            "Place": "Begur",
            "Temperatue": "54",
            "TemperatureDegree": "Celcius",
            "Date": "23/05/2022"
        },
        {
            "Place": "Begur",
            "Temperatue": "53",
            "TemperatureDegree": "Celcius",
            "Date": "22/05/2022"
        },
        {
            "Place": "Begur",
            "Temperatue": "52",
            "TemperatureDegree": "Celcius",
            "Date": "21/05/2022"
        }
    ],
    "560067": [
        {
            "Place": "Begur",
            "Temperatue": "56",
            "TemperatureDegree": "Celcius",
            "Date": "24/05/2022"
        },
        {
            "Place": "Begur",
            "Temperatue": "54",
            "TemperatureDegree": "Celcius",
            "Date": "23/05/2022"
        },
        {
            "Place": "Begur",
            "Temperatue": "53",
            "TemperatureDegree": "Celcius",
            "Date": "22/05/2022"
        },
        {
            "Place": "Begur",
            "Temperatue": "52",
            "TemperatureDegree": "Celcius",
            "Date": "21/05/2022"
        }
    ]
};


    return (
    <div>
        weather Card {pincodeData}
        {pincodeData && weatherData.pincodeData && weatherData[pincodeData].map((data:any)=> 
            (<div key={data.Date}><div> {data.Temperatue} </div>
            <div> {data.Place} </div>
            <div> {data.TemperatureDegree} </div>
            <div> {data.Date} </div></div>)
        )}
    </div>
    );

}




export default WeatherComponent;