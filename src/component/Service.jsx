import React from 'react'
import "./Service.css"
function Service() {
  return (
    <>
       <div id="services">
           <div className='sub_service'>
                <h1>Aviation services</h1>
                <p>Providing the best combination of support and services for each customer profile</p>
           </div>
       </div>

       <div className='main_ser'>
          <div className='sub_ser'>
            <img src="https://mediarenditions.airbus.com/tkq6yIDTtrHSS1hfmkTptZsBY3BUyN7dbcHHJuUpP2s/resize?src=kpkp://airbus/38/563/563362-wbxu7f63jm.jpg&w=480&h=480&t=fit&f=webp" alt="" />
            <div className='min_sub'>
              <h1>Guaranteed repair</h1>
              <p>Serving as Airbus Helicopters’ commitment to repair & overhaul (R&O) turn-around-times, the Guaranteed Repair programme is focused on R&O management at the component level. It enables operators to contractually secure R&O turnaround times, with the goal of improving maintenance planning efficiency.</p>
            </div>
          </div>
          <div className='sub_ser'>
             <img src="https://mediarenditions.airbus.com/KLaqKpu-wl_GT3p2YucXgTtHZacXjj7F1gIfyG3Oy_I/resize?src=kpkp://airbus/38/533/533821-oc159tnp0d.jpg&w=480&h=480&t=fit&f=webp" alt="" />
             <div className='min_sub'>
             <h1>Part availability</h1>
             <p>This exchange service is based on the replacement of parts that are reaching their time between overhaul (TBO) or service life – as well as for the replacement of failed parts within short lead times. The solution is customisable and is built on fixed hourly-rate payments, thereby making maintenance expenses predictable and streamlined.</p>
             </div>
          </div>
          <div className='sub_ser'>
          <img src="https://mediarenditions.airbus.com/EfZL7CMGmDGNP5BfaQsdms-npBzsmVuPJOL-yhEJ9NY/resize?src=kpkp://airbus/38/553/553111-ntqfh9kbyr.jpg&w=480&h=480&t=fit&f=webp" alt="" />
             <div className='min_sub'>
             <h1>Fleet availability</h1>
             <p>The Fleet Availability program is for operators who want to delegate some or all airworthiness and maintenance activities outside of their organisation and ensure short lead times for parts deliveries. By selecting this customisable solution, fleet availability performance is contractually committed – allowing operators to always be mission ready.</p>
             </div>
              
          </div>
       </div>
    </>
   
  )
}

export default Service