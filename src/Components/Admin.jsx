
import React,{useState} from 'react';

import  './Admin.css'
import axios from 'axios';

function Admin() {
    const [location, setlocation] = useState("")
    const [details, setdetails] = useState("")
    const baseurl = "https://openweathermap.org/"
    const apikey = "85353ebd0e1281b3edb1f7593379a5f2"
    const [celsius, setcelsius] = useState("")
    const fetchapi = async () => {
        const inner = document.getElementsByClassName("details2")
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`)
        .then(data => setdetails(data.data))
        .catch(err => console.log(err))
        inner.innertext="afrgtb"
    }
    console.log(details);
  return (
   
<div className='p-2 text-center bg-image' style={{ backgroundImage: "url('https://tse3.mm.bing.net/th?id=OIP.Bpzxhafaukys644Q6E2kawHaEK&pid=Api&P=0&h=220')", height: '800px' }}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
            <header>
                <input onChange={(e)=>setlocation(e.target.value)} type="text" autocomplete="off" class="search-box" placeholder="Search your city..."/>
            </header>
            <button onClick={fetchapi} className='m-3'style={{width:'150px',height:'50px',background:'#6DD9F3',borderRadius:'30px'}} >search</button>
            <main>
                <section class="location">
                <div class="city">{details.name}, {details.sys?.country}</div>
                <div class="date">{details.weather?.description}</div>
                </section>
                <div class="current">
                <div class="temp">{details.main?.feels_like}<span>°c</span></div>
                <div class="date"></div>
                <div class="weather"></div>
                <div class="hi-low">{details.main?.temp}°c / {details.main?.feels_like}°c</div>
                </div>
            </main>
              
            </div>
          </div>
        </div>
</div>
  
  )
}

export default Admin