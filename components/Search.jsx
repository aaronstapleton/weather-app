import React, {useState} from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
    const [city, setCity] = useState("London");
    
    
    const handleCity = (e) => {
        setCity(e.target.value);
        console.log(city);
    }

    
  
    return (

    <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 mb-10 text-white z-10'>
          <form
            className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
          >
            <div>
              <input
                className='bg-transparent border-none text-white focus:outline-none text-2xl'
                type='text'
                placeholder='Search city'
                onChange={handleCity}
              />
            </div>
            <button
                onClick = {() => {
                  // eslint-disable-next-line no-restricted-globals
                  props.getWeather(event,city);
                  setCity("");
               }}
               >
              <BsSearch size={20} />
            </button>
          </form>
    </div>

   
  )
}

export default Search