
//import React, { useState } from 'react'
import axios from 'axios'

import { useState, useEffect } from 'react'



function Supdate(props) {
 
 


  const [user, setUser] = useState({
    
    sname: '',
   
    sphone: '',
    staddress: '',
    areapin: '',
    cityname: '',
    scode:0,
    pin1:'',
    pin2:'',
    pin3:'',
    pin4:'' 
  }) 

  const token = localStorage.getItem("user")
  useEffect(() => {
    

    
 axios({
        method: "post",
        url: "http://localhost:8080/UpdateServiceproviderreq",
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
      "sname": user.sname,
      
      "sphone": user.sphone,
      "staddress": user.staddress,
      "areapin": user.areapin,
      "cityname": user.cityname,
      "scode": user.scode,
      "pin1": user.pin1,
      "pin2": user.pin2,
      "pin3": user.pin3,
      "pin4": user.pin4
    }
    console.log(val)
    axios({
      method: "post",
      url: `http://localhost:8080/UpdateServiceprovider`,
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
          <label for="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" placeholder="Enter name" value={user.sname} name="sname" onChange={e => changeHandler(e)} />
        </div>

      




        <div className="form-group"  >
          <label for="exampleInputEmail1">phone no</label>
          <input type="tel" pattern="[7-9]{1}[0-9]{9}" className="form-control" placeholder="enter ph no " value={user.sphone} name="sphone" onChange={e => changeHandler(e)} />

        </div>


        <div className="form-group">
          <label for="exampleInputEmail1">address</label>
          <input type="text" className="form-control" placeholder="address" value={user.staddress} name="staddress" onChange={e => changeHandler(e)} />

        </div>

        

        <div className="form-group">
          <label for="exampleInputEmail1">Area Pin</label>
          <input type="text" required  pattern="[0-9]{6}" maxLength="6" className="form-control" placeholder="" value={user.areapin} name="areapin" onChange={e => changeHandler(e)} />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">City Name</label>
          <input type="text" className="form-control" placeholder="City name" value={user.cityname} name="cityname" onChange={e => changeHandler(e)} />

        {/* </div>
          <br></br>
          <br></br>
        <p>101-Plumber, 102-Carpenter, 103-Pest Control, 104-Electrician, 105-A/C Service </p>

        <div className="col-md-3"> */}
          
          <label for="validationCustom04" className="form-label">Service code</label>
  
          <select  required className="form-select" id="validationCustom04"  name='scode' value={user.scode} onChange={e=>changeHandler(e)}>
            <option>Choose...</option>
            {/* selected disabled value="choose"  */}
            <option value="101"> plumber</option>
            <option value="102" >Carpenter</option>
            <option value="103" >Pest Control</option>
            <option value="104">Electrician</option>
            <option value="105">A/C Service</option>
          </select>
        </div>


        <div className="form-group">
          <label for="exampleInputEmail1">Service area pin 1</label>
          <input type="text"   pattern="[0-9]{6}" maxLength="6" className="form-control" placeholder="" value={user.pin1} name="pin1" onChange={e => changeHandler(e)} />

        </div>
        
        <div className="form-group">
          <label for="exampleInputEmail1">Service area pin 2</label>
          <input type="text"   pattern="[0-9]{6}" maxLength="6" className="form-control" placeholder="" value={user.pin2} name="pin2" onChange={e => changeHandler(e)} />

        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Service area pin 3</label>
          <input type="text"   pattern="[0-9]{6}" maxLength="6" className="form-control" placeholder="" value={user.pin3} name="pin3" onChange={e => changeHandler(e)} />

        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Service area pin 4</label>
          <input type="text"   pattern="[0-9]{6}" maxLength="6" className="form-control" placeholder="" value={user.pin4} name="pin4" onChange={e => changeHandler(e)} />

        </div>




        <button type="submit" id="sub_btn" >Submit</button>
      </form>



    </div>
    
    </div>
  )
}

export default Supdate