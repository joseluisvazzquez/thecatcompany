import { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
interface Breed {
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string; 
  wikipedia_url: string;
}

interface Cat {
  id: string;
  breeds: Breed[];
  url: string;
  name: string;
  width: 360;
}






const CatSelector: React.FC = () => {
  const [data, setData] = useState<Cat[]>([]);
  const [selectedBreed, setSelectedBreed] = useState<string>("");

  useEffect(() => {
    // Realiza la llamada a la API.
    fetch('https://api.thecatapi.com/v1/images/search?limit=17&has_breeds=1&api_key=live_4yKfx4lZDgTLKXNOq4iR7yG1wDblgZe65OvKf0LQ72x7ffjKBabYoX4ADVv3eYQ3')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  },[])

  const handleSelect = (e: string| null | undefined) => {
    if (e) {
      setSelectedBreed(e);
    }
  }

  return (
    <Container fluid="md" className='mt-5'>
      <Dropdown onSelect={handleSelect} className="d-flex justify-content-center">
        <Dropdown.Toggle variant="success" id="dropdown">
          Selecciona una raza
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {data.map((cat, id) => (
            cat.breeds.map((breed, id) => (
              <Dropdown.Item eventKey={breed.name}>{breed.name}</Dropdown.Item>
            ))
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Row className=" d-flex justify-content-center">
        {data.map((cat, id) =>(
          cat.breeds.map((breed, id) => (
            breed.name === selectedBreed &&
            <Col key={id} sm={3}>
              <Card className='shadow mt-3 mb-1'>
                <Card.Body className='mt-3'>
                  <Card.Title>{breed.name}</Card.Title>
                  <ListGroup variant='dark' className='shadow-sm'>
                    <ListGroup.Item>
                      <Badge bg='danger'>Life Span:</Badge> {breed.life_span}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Badge bg='danger'>Temperament:</Badge> {breed.temperament}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <Badge bg='danger'>Origin:</Badge> <p className='danger'>{breed.origin}</p>
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Img variant="top" src={cat.url} className='rounded d-grid' />
                </Card.Body>
              </Card>
            </Col>
          ))
        ))}
      </Row>
    </Container>
  );
};

export default CatSelector;
