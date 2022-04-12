import React, { useState } from 'react'
import axios from 'axios'





function Register1(props) {
  

  const [user, setUser] = useState({
    cname: '',
    username: '',
    password: '',
    cphone: '',
    staddress: '',
    areapin: '',
    cityname: ''
  })
  const { cname, username, password, cphone, staddress, areapin, cityname } = user

  const changeHandler = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }



  const submitHandler = async e => {
    e.preventDefault()
    
    
try{


    const response = await axios.post("http://localhost:8080/insertcustomer", user
    )
    console.log(response)
    if(response.data===true){
     window.location="/login"
    }
    else{
      alert(response.data)
    }
}
catch(error){
  alert("something went wrong try again")
  
}
  }



  return (

  


    <div>
    
    <div className="text-center m-5-auto">
      <form onSubmit={e => submitHandler(e)}>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text"  required className="form-control" placeholder="Enter name" value={cname} name="cname" onChange={e => changeHandler(e)} />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">E-mail</label>
          <input type="email" required className="form-control" placeholder="Enter name" value={username} name="username" onChange={e => changeHandler(e)} />

        </div>


        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password"  required className="form-control" placeholder="Password" value={password} name="password"  onChange={e => changeHandler(e)} />
        </div>

        <div className="form-group"  >
          <label for="exampleInputEmail1">phone no</label>
          <input type="tel" pattern="[7-9]{1}[0-9]{9}" required className="form-control" placeholder="enter ph no " value={cphone} name="cphone" onChange={e => changeHandler(e)} />

        </div>


        <div className="form-group">
          <label for="exampleInputEmail1">address</label>
          <input type="text" required className="form-control" placeholder="address" value={staddress} name="staddress" onChange={e => changeHandler(e)} />

        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Area Pin</label>
          <input type="text"  pattern="[0-9]{6}" required className="form-control" placeholder="Pin" value={areapin} name="areapin" onChange={e => changeHandler(e)} />

        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">City Name</label>
          <input type="text" required className="form-control" placeholder="City name" value={cityname} name="cityname" onChange={e => changeHandler(e)} />

        </div>

        <button type="submit" id="sub_btn">Submit</button>
      </form>



    </div>

</div>


  )
}

export default Register1