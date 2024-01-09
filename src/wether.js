
import { useState } from "react";
import Fetchdata from "./fetch";




const container = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaI5G5eO2x9-CjRBO36TihihCzE1cIt7q5g&usqp=CAU")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
}


const box = {
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaI5G5eO2x9-CjRBO36TihihCzE1cIt7q5g&usqp=CAU")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "270px",
    width: "550px",
    borderRadius: "5px",
}




function Wether() {
    const [query, setQuery] = useState("")
    const [weather, setWether] = useState()
    const change = (e) => {
        setQuery(e.target.value)
    }

    const search = async (e) => {
        if (e.code === "Enter") {
            let data = await Fetchdata(query)
            setWether(data)
        }
    }

    return (
        <div style={container}>
            <div style={box} >
                <div style={{ textAlign: "center" }}>
                    <input value={query} onChange={change} type="text" placeholder="Enter City Name" onKeyPress={search} style={{ padding: "10px", width: "300px", borderRadius: "7px", marginTop: "15px" }} />
                </div><br />

                {weather &&

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <h1>{weather.name} {weather.sys.country}</h1>
                        </div>

                        <div>
                            <div style={{ display: "flex",margin:0,padding:0 }}>
                                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="k" />
                                <h2>{Math.round(weather.main.temp)}&deg;C</h2>
                            </div>
                            {/* <div> */}
                                <h4>
                                Wind : {Math.round(weather.wind.speed)}km/h <br/>
                                Humidty : {Math.round(weather.main.humidity)}%<br/>
                                SunRise : {new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-IN')}<br/>
                                SunSet : {new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-IN')}
                                </h4>
                            {/* </div> */}

                        </div>
                    </div>

                }


            </div>
        </div>
    )
}
export default Wether;