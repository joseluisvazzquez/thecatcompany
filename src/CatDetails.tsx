import { useEffect, useState } from "react";
import { Badge, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

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
  width: number;
}


const CatDetails: React.FC = () => {
  const [data, setData] = useState<Cat[]>([]);

  useEffect(() => {
    // Realiza la llamada a la API.
    fetch('https://api.thecatapi.com/v1/images/search?limit=5&has_breeds=1&api_key=live_4yKfx4lZDgTLKXNOq4iR7yG1wDblgZe65OvKf0LQ72x7ffjKBabYoX4ADVv3eYQ3')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  },[])

    
  return (
    <Container fluid="md" className='mt-5'>
            <Row>
                {data.map((cat, id) =>(
                    <Col key={id} sm={3}>
                        <Card className='shadow mt-3 mb-1'>
                            <Card.Body className='mt-3'>
                                {cat.breeds.map((breed, id) =>(
                                  <>
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
                                  </ListGroup></>
                                ))}
                                <Card.Img variant="top" src={cat.url} className='rounded'/>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

  );
};

export default CatDetails;