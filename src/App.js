import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import Login from "./components/pages/Login";
import Registerprovider from "./components/pages/Registerprovider";
import jwtDecode from "jwt-decode";
import AxiosPost from "./components/pages/BootTable";
import Register1 from "./components/pages/Register1";
import Billtable from "./components/pages/Billtable";
import Cupdate from "./components/pages/Cupdate";
import Supdate from "./components/pages/Supdate";
import Cushistory from "./components/pages/cushistory";

function App() {
  const [user1, setUser1] = useState()
  // console.log(user1)
  useEffect(() => {
    try {

      const jwt = localStorage.getItem("user")
      const dao = jwtDecode(jwt)
      // console.log(dao.jti)
      setUser1(dao)
        
      
    }
    catch (error) { }
  }, [])



  return (

    <Router>
      <div>
        <Navbar user1={user1} />
        <Switch>
          <Route exact path="/" component={Home} user1={user1} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register1} user1={user1} />
          <Route path="/registerprovider" component={Registerprovider} />
          {/* <Route path="/splogin" component={Splogin} /> */}
          {/* <Route path="/home" component={ HomePage } />  */}
            <Route path="/dummy" component={AxiosPost} user1={user1} />
            <Route path="/billing" component={Billtable} user1={user1} />
            <Route path="/cprofileupdate" component={Cupdate} />
            <Route path="/sprofileupdate" component={Supdate} />
            <Route path="/history" component={Cushistory} />
        </Switch>
        
      </div>
    </Router>

  );
}

export default App;
