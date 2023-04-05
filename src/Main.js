import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "./Main.css";

function Main() {
  let location = useNavigate();

  const [element, setelement] = useState([]);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const elements = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(elements.data);
    setelement(elements.data);
  };

  const clicked = (item) => {
    location(`view/${item.id}`);
  };

  const navclicked=()=>{
    location('/')
  }
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand onClick={navclicked()} style={{cursor:"pointer"}}>
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
        <h2>Json Placeholder</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>

      <div className="m-4 row">
        {element
          ? element.map((item) => (
              <Card
                style={{ width: "18rem", height:"10rem", cursor: "pointer" }}
                className="m-2"
                onClick={() => clicked(item)}
              >
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
              </Card>
            ))
          : ""}
      </div>
    </div>
  );
}

export default Main;
