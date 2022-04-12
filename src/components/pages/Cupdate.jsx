
//import React, { useState } from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'



function Cupdate(props) {
 
 


  const [user, setUser] = useState({
    
    cname: '',
    
    cphone: '',
    staddress: '',
    areapin: '',
    cityname: ''
  }) 

  const token = localStorage.getItem("user")
  useEffect(() => {
    

    
 axios({
        method: "post",
        url: "http://localhost:8080/UpdateCustomerreq",
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response)=>{
        setUser(response.data)
      console.log(response.data) 
      })
      

   
  }, []);


  
  
  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }



  const submitHandler = async e => {
    e.preventDefault()

    const val = {
      "cname": user.cname,
      "cphone":user.cphone,
      "staddress" : user.staddress,
      "areapin" : user.areapin,
      "cityname" : user.cityname
    }
    console.log(val)
    axios({
      method: "post",
      url: `http://localhost:8080/UpdateCustomer`,
      data: val,
      headers: { Authorization: `Bearer ${token}` }
    })


      .then((response) => {
        console.log(response)
        if (response.data === true) {
          alert('updated');
          window.location="/"
        }
        else{
          alert(response.data);
        }
      

        // const response = await axios.post( "http://localhost:8080/servicebook" , { headers: {"Authorization" : `Bearer ${token}`}, data:sb })
      })
       .catch((error)=>{
        alert("OOPS! something Went wrong");
       })


    }
  


  return (

    <div>

      <div className="text-center m-5-auto">
        <form onSubmit={e => submitHandler(e)}>
          <div className="form-group">

            <h1><center>Update Customer Details</center></h1>
            <label for="exampleInputEmail1">Name</label>
            <input type="text" required className="form-control" value={user.cname} name="cname" onChange={e => changeHandler(e)} />
          </div>

          {/* <div className="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" required className="form-control" placeholder="Enter name" value={username} name="username" onChange={e => changeHandler(e)} />

        </div> */}


          <div className="form-group"  >
            <label for="exampleInputEmail1">phone no</label>
            <input type="tel" pattern="[7-9]{1}[0-9]{9}" required className="form-control" value={user.cphone} name="cphone" onChange={e => changeHandler(e)} />

          </div>


          <div className="form-group">
            <label for="exampleInputEmail1">address</label>
            <input type="text" required className="form-control" value={user.staddress}  name="staddress" onChange={e => changeHandler(e)} />

          </div>

          <div className="form-group">
            <label for="exampleInputEmail1">Area Pin</label>
            <input type="text" pattern="[0-9]{6}" required className="form-control" value={user.areapin}  name="areapin" onChange={e => changeHandler(e)} />

          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">City Name</label> 
            <input type="text" required className="form-control" value={user.cityname}  name="cityname" onChange={e => changeHandler(e)} />

          </div>
        
            <button type="submit" id="sub_btn" onClick={submitHandler} >Update</button>
          
        </form>

      </div>

    </div>

  )
}

export default Cupdate