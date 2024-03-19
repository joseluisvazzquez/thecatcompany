import React from "react";

import { Carousel, Col, Nav, Row, Tab } from "react-bootstrap";
function Home(){
    return(
        <>
        <div className="container-sm">
            <h1 className="display-3 text-center my-4">Welcome to our guide tour a cross    <span className="badge text-bg-danger mx-4 my-3 rounded-pill">Tokyo, Japan!</span></h1>
        </div>
        <div className="container-sm">
            <p className="display-6">
                Explore the bustling districts of Shibuya and Shinjuku, where neon lights 
                illuminate the night, and witness a vibrant metropolis where towering 
                skyscrapers coexist with peaceful Shinto shrines and lush gardens.
            </p>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={1}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        
        </>

    );
}; export default Home;