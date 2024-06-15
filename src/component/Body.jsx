import React from 'react'
import "./Body.css"
import Data from "../Data.json"
function Body() {
    console.log(Data);
  return (
    <>

    <div className='backgroung-img'>
        <div className='title'>
            <h1>Find your perfect aircraft.</h1>
            <hr />
            <p>We have the world's best aircraft options. Just for you.</p>
           <button class="view_more" ><a href="#new_item">Learn More</a> </button>
        </div>
    </div>
    <div id="new_item">
        <h4>FEATURED</h4>
        <h1>New Aircraft Deals</h1>
        <div className='new_helicapter'>
          {
            Data.map((value,index)=>{
                return(
                    <>
                    <div class="item">
                    <img src={value.img} alt="" />
                    <div className='item_title'>
                    <div className='nameprice'>
                    <h3>{value.name}</h3>
                    <p>Rs.{value.price}</p>
                    </div>
                    <p className='passengers'>Passengers:-{value.Passengers}</p>
                    <p class="about_data">{value.about}</p>
                    </div>
                </div>
           
                    </>
                )
            })
          }
           
        </div>

    </div>
    </>
    
  )
}

export default Body