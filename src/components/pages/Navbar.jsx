import React from 'react'
import axios from 'axios'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Navbar = (props) => {
 
  const handleBooking = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("user");
    console.log(token)
    try{
    const response = await axios.post(
      "http://localhost:8080/authenticate",
      token
    );
    }
    catch(error){
      alert(`something went wrong`)
    }

  }

  const handleBill = async (e) =>{
    e.preventDefault();
    const token = localStorage.getItem("user");
    console.log(token)
   try{
    const response = await axios.post(
      "http://localhost:8080/authenticate",
      token
    )
   }
   catch(error){
     alert(`Opps! something went wrong`)
   }
  };

  const handleLogout = () => {

    localStorage.removeItem("user");
    window.location = '/';
  };

  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">DOOR-SERV</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>

                {props.user1 && (props.user1.jti === "customer") && (
                  <React.Fragment>
                    <ol className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" href="/cprofileupdate">profile</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/dummy" >
                          bookings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/billing" >Bill's</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/history">History</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/" onClick={handleLogout}>logout</a>
                      </li>
                    </ol>
                  </React.Fragment>)}

                  {props.user1 && (props.user1.jti === "Serviceprovider") && (
                  <React.Fragment>
                    <ol className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" href="/sprofileupdate">profile</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/dummy" >
                          bookings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/history">History</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/" onClick={handleLogout}>logout</a>
                      </li>
                    </ol>
                  </React.Fragment>)}

                {!props.user1 && (

                  <React.Fragment>
                    <ol className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" href="/registerprovider">RegisterAsSeviceProvider</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/Login" >
                          login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/register">Signup</a>
                      </li>
                    </ol>
                  </React.Fragment>)}

              </ul>
            </div>
          </div>
        </nav>
      </section>

    </div>
  )
}

export default Navbar