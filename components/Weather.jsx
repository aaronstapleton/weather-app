import React from 'react'
import Image from 'next/image';

const Weather = (props) => {

    // let picture = "Clear";
    // let icon = props.data.weather[0].icon;

    // if(icon==="01d" || icon==="01n" || icon==="01d"){
    //   picture = "Clear"
    // } else if (icon==="02d" || icon==="02n" || icon==="03d" || icon==="03n" || icon==="04d" || icon==="04n" ) {
    //   picture = "Clouds"
    // } else if (icon==="09d" || icon==="09n" || icon==="10d" ||icon==="10n" ){
    //   picture = "Rain"
    // } else if (icon==="11d" ||icon==="11n" ) {
    //   picture = "Thunderstorm"
    // }

    // let src = '/../public/assets/'+picture+'.jpg';

  return (
    <div >

  


        <div className='grid grid-cols-3 h-[30vh]'>
            <div></div>
            <div className='bg-black opacity-75 text-gray-200 rounded-2xl'>
                <p className='text-4xl sm:text-5xl md:text-6xl font-bold px-10 pt-4'>{props.data.name}</p>

                <p className='inline-block text-4xl px-10 pt-10'>{props.data.main.temp.toFixed(0)}°F</p>
                <Image
                src={"http://openweathermap.org/img/wn/"+props.data.weather[0].icon+"@2x.png"}
                alt='/'
                width='50'
                height='50'
                className='pl-15 inline-block'
                />

                <p className='px-10 pt-4'>{props.data.weather[0].description}. It feels like {props.data.main.feels_like.toFixed(0)}°F with {props.data.main.humidity}% humidity. </p>
            </div>
            <div></div>
            
        </div>
    </div>
  )
}

export default Weather