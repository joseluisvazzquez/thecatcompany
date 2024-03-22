import React from "react";
import cat1 from "./img_page/cat1.png"
import cat2 from "./img_page/cat2.png"
import cat3 from "./img_page/cat3.png"
import { Carousel, Col, Nav, Row, Tab, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
        <div className="container-sm">
            <h1 className="display-3 text-center my-4">This a site for cats, humans are not allowed!</h1>
            <Row className="d-flex justify-content-center">
              <Col xs={6} md={3}>
                <Image src={cat1} className="shadowhover w-100 h-75" roundedCircle />
              </Col>
              <Col xs={6} md={3}>
                <Image src={cat2} className="shadowhover w-100 h-75" roundedCircle />
              </Col>
              <Col xs={6} md={3}>
                <Image src={cat3} className="shadowhover w-100 h-75" roundedCircle />
              </Col>
            </Row>
            <span className="badge bg-gradient bg-dark mx-4 my-3 rounded-pill  d-flex justify-content-center"> 
              <Link to="/CatList" className='me-3 display-4 text-decoration-none link-light'>The Cat Company!</Link>
            </span>
        </div>
        </>

    );
}; export default Home;