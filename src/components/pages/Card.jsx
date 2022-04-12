import React, { useState } from "react";
import axios from 'axios'
import { Alert } from 'bootstrap'


function Card(props) {
  const [sb, setSb] = useState({ serviceName: props.name })
  const ghe =  props.name 


  const submitHandler = async (e) => {
    e.preventDefault()

    // console.log(pr)
    const hie = localStorage.getItem("user")
    if (hie) {
      console.log(hie)

      //   const response = await axios.post({
      //     method:"post",
      //     url:"http://localhost:8080/servicebook",
      //     data:ghe,
      //     headers:{ Authorization: `Bearer ${hie}` }

      //   })
      //   .then(res => console.log(response))
      // }



      axios({
        method: "post",
        url: `http://localhost:8080/servicebook/${encodeURIComponent(ghe)}`,
        data: ghe,
        headers: { Authorization: `Bearer ${hie}` }
      })

        .then((response) => {
          console.log(response)
          if (response.data === true) {
            alert('service booked');
          }
          else{
            alert('currently no service provider is avaiilable in your area');
          }

          // const response = await axios.post( "http://localhost:8080/servicebook" , { headers: {"Authorization" : `Bearer ${token}`}, data:sb })
        })
    }
    else {

      window.location = "/login"
    }
  }

  // console.log(response)




  return (

    <div className='services'>

      <div className="card" style={{ width: '18rem' }} >
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>

          <p className="card-text">{props.text}</p>
          <button id="sub_btn" type="submit" onClick={submitHandler}  >Book</button>
        </div>

      </div>

    </div>
  )
}

export default Card