import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();



  // login the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username, password, '===============')
    try{
      const user = { username, password };
    // send the username and password to the server

    const response = await axios.post(
      "http://localhost:8080/authenticate",
      user

    );

    // set the state of the user
    setUser(response.data);
    
    // store the user in localStorage
    localStorage.setItem("user", response.data);
    //window.location.reload();
    window.location = "/";
    }
    catch (error) {
    alert("wrong credentials")
    
  }

  };

  

  return (
    <div>
      <div className="text-center m-5-auto">
        <h2>Customer Sign-in</h2>
        <form onSubmit={handleSubmit} >
          <p>
            <label>E-mail address</label><br />
            {/* <input id="id1" type="text" name="first_name" required /> */}
            <input
              type="text"

              value={username}
              placeholder="enter a username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </p>
          <p>
            <label>Password</label>
            {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
            <br />
            {/* <input id= "id2" type="password" name="password" required /> */}
            <input
              type="password"

              value={password}
              placeholder="enter a password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </p>
          <p>
            <button id="sub_btn" type="submit" >Login </button>
          </p>
        </form>
       
      </div>

    </div>
  )
}

