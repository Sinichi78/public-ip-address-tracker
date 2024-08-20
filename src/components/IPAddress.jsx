import arrow from '/icon-arrow.svg';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapComp from './Map';
import Axios from 'axios'

mapboxgl.accessToken =
  'pk.eyJ1Ijoib3ViYWlkbHVtYSIsImEiOiJjbHQ1dXZyazYwNXUyMmtvMXZjeXE1Z2lzIn0.OcGQkEqa-yT01k68Gwn6dw';

function App() {
  const [ip, setIp] = useState('');
  const [data, setData] = useState({});
  const [domain, setDomain] = useState("");
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);


  function getLocation() {
    Axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_wPmxx9SGL3JvuE5nppiUY4D1UmaaH&ipAddress=${ip}`
    )
      .then((res) => {
        console.log(res.data)
        setData(res.data);
        setLat(res.data.location.lat);
        setLng(res.data.location.lng);
        setDomain(res.data.as.domain)
  
      });
    return data;
  }


  useEffect(() => {
    getLocation();
  }, []);

 

  return (
    <main>
      <header className='flex flex-col items-center gap-8 p-8'>
        <h1 className=' text-white text-2xl'>IP Address Tracker</h1>
        <form
          className='flex items-stretch w-full'
          action=''
          onSubmit={(e) => {
            e.preventDefault();
            getLocation();
          }}
        >
          <input
            id='ipInput'
            type='text'
            placeholder='Search for any IP address or domain'
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />

          <button id='submitInput' type='submit'>
            <img src={arrow} alt='Submit' />
          </button>
        </form>
        <article className=" results flex flex-col gap-5 bg-white border-r-15px text-center p-6 w-full">
          <div>
            <h3>IP Address</h3>
            <h2>{data.ip ? data.ip : ''}</h2>
          </div>
          <div>
            <h3>Location</h3>
            <h2>
              {data.location
                ? `${data.location.region}, ${data.location.country}`
                : ''}
            </h2>
          </div>
          <div>
            <h3>Timezone</h3>
            <h2>{data.location ? `UTC ${data.location.timezone}` : ''}</h2>
          </div>
          <div>
            <h3>ISP</h3>
            <h2>{data.isp ? data.isp : ''}</h2>
          </div>
          <div>
            <h3>Domain</h3>
            <h2>{domain ? domain : ''}</h2>
          </div>
        </article>
      </header>
      <div>
        <MapComp lng={lng} lat={lat} />
      </div>
      <footer className='flex justify-center mt-20 text-xs '>
      <p>
        &#169; August 20, 2024 <br />
        Paul Stephen Bayot
      </p>
      </footer>
    </main>
  );
}

export default App;