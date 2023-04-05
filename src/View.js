import React, { useState } from "react";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

function View() {
  let location = useNavigate();

  const [item,setItem]= useState([])
  const itemId = useParams()
  console.log(itemId.id);
  useEffect(()=>{
    fetchdata();
  }, [])

  const fetchdata = async()=>{
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts/'+itemId.id)
    console.log(result);
    setItem(result.data)

  }
  const navclicked=()=>{
    location('/')
  }
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand onClick={()=>navclicked()} style={{cursor:"pointer"}}>
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlF7tSb8n6Q1yvNoW1Qyon4j507hDrZN1WQ&usqp=CAU"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Json Dummy
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div className="container text-center mt-5">
        <h2>Json Dummy View Page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
{ item?     <div className="container text-center mt-5" style={{border:"2px solid black"}}>
        <div className="container details" >
          <h3>Id : {item.id}</h3>
          
          <h5>Name : {item.title}</h5>
          <p>Details : {item.body}</p>

        </div>
      </div>:''}
    </div>
  );
}

export default View;
