import { useState } from "react"
import axios from "axios"

function InputComp(){

const[userInput,setuserInput]=useState("")
const[weather,setweather]=useState("")
const[tempraure,settemprature]=useState("")
const[description,setdescription]=useState("")

function handleInput(evt){

  setuserInput(evt.target.value)

}

function handleCheck(){
  const cityWeather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=31982986afa32912f8411593f3e53503`)
  cityWeather.then(
    function(success){
      setweather(success.data.weather[0].main)
      settemprature(success.data.main.temp)
      setdescription(success.data.weather[0].description)
    }
  ).catch(
    function(){
      console.log("failed")
    }
  )

}
  return(<div>
    
    <input 
    className="p-2 border rounded-md border-black bg-transparent m-2 placeholder-red-600 w-48"
    placeholder="Enter your city name"
    onChange={handleInput}></input>
    <button className="bg-red-500  text-black p-2 m-2 border-none rounded-md" onClick={handleCheck}>Get Report</button>
    <p className="text-xl text-black p-1">Weather: {weather}</p>
    <p className="text-xl text-black p-1">Teamprature: {tempraure}</p>
    <p className="text-xl text-black p-1">Description: {description}</p>
  </div>)
}

export default InputComp