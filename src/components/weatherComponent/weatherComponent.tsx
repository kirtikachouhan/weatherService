import React from "react";
import PropType from "prop-types";
import './weather.css'

WeatherComponent.propTypes = {
    pincodeData: PropType.string,
    tempType: PropType.string
}
function WeatherComponent({ pincodeData, tempType }: { pincodeData: string, tempType:string }) {
    let weatherData: any = {
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


    const changeTempFehToCel = (feh) => {
        return feh - 32 * 5 / 9;
    }

    return (
        <div className="row">
            {
                pincodeData && weatherData[pincodeData] ? 
           (weatherData[pincodeData].map((data: any) =>
                <div className="column" key={data.Date}>
                    <div className="card">
                       <div> Temperatue : {tempType === "farenhite" ? changeTempFehToCel(data.Temperatue) : data.Temperatue} </div>
                        <div> Place : {data.Place} </div>
                        <div> Date : {data.Date} </div>
                        <br /></div>
                </div>
                )) :
                    pincodeData.length  ? (<div>Invalid Pincode</div> ) : <div></div>
            }

        </div>
    );

}




export default WeatherComponent;