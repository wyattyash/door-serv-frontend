import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios"

const Cushistory = (props) => {


 

  const [posts, setPosts] = useState({ blogs: [] });
  const hie = localStorage.getItem("user")

 

  useEffect(() => {


    const fetchPostList = async () => {
      const { data } = await axios({
        method: "post",
        url: "http://localhost:8080/history",
        headers: { Authorization: `Bearer ${hie}` }
      });
     
      setPosts({ blogs: data });
      console.log(data);
    };
    fetchPostList();
  }, []);


  return (


    <div>

      <div>
        <h1><center>History</center> </h1>
        <ReactBootStrap.Table striped bordered hover id="qwerty">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Bill id</th>
              <th scope="col">Customer PhNo</th>
              <th scope="col">Service</th>
              <th scope="col">Service Provider PhNo</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>

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
                  <td>{data.status===true ? 
                    "paid" : "pending"  
                
                }</td>
                  </tr>
              ))}

          </tbody>
        </ReactBootStrap.Table>
      </div>



    </div>

  );
};

export default Cushistory;