import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Button from "react-bootstrap/Button";


const Billtable = (props) => {


  const [billId, setBillId] = useState(null)
  const [amount, setAmount] = useState(null)
  // const { billId, amount } = bill

  // const changeHandler = e => {
  //   setBill({ ...bill,[e.target.name]: e.target.value })
  // }

  const submitHandler = async (e) => {
    e.preventDefault()
    // setBillId(arg)

    const bill = {
      "billId": billId,
      "amount": amount
    }
    console.log(bill)

    try {


      const response = await axios.post("http://localhost:8080/payment", bill
      )
      console.log(response)
      if (response.data === "Payment Sucessfull") {
        alert("Payment Done")

        window.location = "/billing"
       
      }
      else {
        alert(response.data)
      }
    }
    catch (error) {
      alert("OOPS! something went wrong try again")

    }
  }

  const [posts, setPosts] = useState({ blogs: [] });
  const hie = localStorage.getItem("user")

 

  useEffect(() => {


    const fetchPostList = async () => {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8080/mybill",
        headers: { Authorization: `Bearer ${hie}` }
      });
      // setBill({ billId: data[0].sno })
      // setBillId("")
      // setAmount("")
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, []);


  return (


    <div>

      <div>
        <h1><center>Billing</center> </h1>
        <ReactBootStrap.Table striped bordered hover id="qwerty">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Payment id</th>
              <th scope="col">Customer PhNo</th>
              <th scope="col">Service</th>
              <th scope="col">Service Provider PhNo</th>
              <th scope="col">Amount</th>
              <th scope="col">Enter Amount</th>

            </tr>
          </thead>
          <tbody>

            {posts.blogs &&
              posts.blogs.map((data, index) => (
                <tr >
                  <td>{data.sno}</td>
                  <td>{data.cphone}</td>
                  <td>{data.service}</td>
                  <td>{data.sphone}</td>
                  <td>{data.amount}</td>
                  <td>  <input type="text" pattern="[0-9]{6}" maxLength="6" className="form-control" onChange={({ target }) => { setBillId(data.sno);setAmount(target.value)} }/> </td>
                  {/* <td> <Button variant="secondary" onClick={async (e) => { await setBillId(data.sno); await submitHandler(e)}}>
                    Confirm
                  </Button></td> */}
                  <td> <Button variant="secondary" onClick={async (e) =>  await submitHandler(e)}>
                    pay
                  </Button></td>
                </tr>
              ))}

          </tbody>
        </ReactBootStrap.Table>
      </div>



    </div>

  );
};

export default Billtable;