import React from "react"
import Day from "./Day"
class Weather extends React.Component{
    render(){
    const {temperature_2m_max:max,temperature_2m_min:min,time:dates,weathercode:codes}=this.props.weather
    console.log(max)
    return (
        <>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
            {
                dates.map((date,index)=>{
                  return <Day  date={date} max={Number(max.at(index))} min={Number(min.at(index))} code={codes.at(index)} key={date} isToday={index===0}/>
                })
            }
        </ul>
        </>
    )
   }
}
export default Weather