import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";
import jwtDecode from "jwt-decode";

const AxiosPost = (props) => {


  const [bill, setBill] = useState({
    bookingId: 0 ,
    amount: ""
  })
  const { bookingId, amount } = bill

  const changeHandler = e => {
    setBill({ ...bill,[e.target.name]: e.target.value })
  }

  const submitHandler = async e => {
    e.preventDefault()


    try {


      const response = await axios.post("http://localhost:8080/genratebilling", bill
      )
      console.log(response)
      if (response.data === true) {
        alert("submitted")

        window.location.reload()
      }
      else {
        alert(response.data)
      }
    }
    catch (error) {
      alert("something went wrong try again")

    }
  }

  const [posts, setPosts] = useState({ blogs: [] });
  const hie = localStorage.getItem("user")

  const dao = jwtDecode(hie)

  useEffect(() => {


    const fetchPostList = async () => {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8080/mybooing",
        headers: { Authorization: `Bearer ${hie}` }
      });
      setBill({ bookingId: data[0].bid })
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, []);


  return (


    <div>
      {dao.jti === "Serviceprovider" &&

        <div>
          <h1><center>My Bookings</center> </h1>
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Booking_Id</th>
                <th scope="col">Address</th>
                <th scope="col">Customer PhNo</th>
                <th scope="col">Customer Name</th>
                <th scope="col">ServiceProvider PhNo</th>
                <th scope="col">ServiceProvider Name</th>
                <th scope="col">Service</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>

              {posts.blogs &&
                posts.blogs.map((data, index) => (
                  <tr key={data.id}>
                    <td>{data.bid}</td>
                    <td>{data.cadd}</td>
                    <td>{data.cphone}</td>
                    <td>{data.cname}</td>
                    <td>{data.sphone}</td>
                    <td>{data.sname}</td>
                    <td>{data.service}</td>
                    <td>  <input type="text" pattern="[0-9]{6}" maxLength="6" className="form-control" value={amount} name="amount" onChange={e => changeHandler(e)} /> </td>
                    <td> <Button variant="secondary" onClick={submitHandler}>
                      Generate bill
                    </Button></td>
                  </tr>
                ))}

            </tbody>
          </ReactBootStrap.Table>
        </div>}


      {dao.jti === "customer" &&
        <div>

          <h1><center>My Bookings</center> </h1>
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Booking_Id</th>
                <th scope="col">Address</th>
                <th scope="col">Customer PhNo</th>
                <th scope="col">Customer Name</th>
                <th scope="col">ServiceProvider PhNo</th>
                <th scope="col">ServiceProvider Name</th>
                <th scope="col">Service</th>

              </tr>
            </thead>
            <tbody>

              {posts.blogs &&
                posts.blogs.map((data, index) => (
                  <tr key={data.id}>
                    <td>{data.bid}</td>
                    <td>{data.cadd}</td>
                    <td>{data.cphone}</td>
                    <td>{data.cname}</td>
                    <td>{data.sphone}</td>
                    <td>{data.sname}</td>
                    <td>{data.service}</td>

                  </tr>
                ))}

            </tbody>
          </ReactBootStrap.Table>
        </div>
      }
    </div>

  );
};

export default AxiosPost;