import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import CatDetails from "./CatDetails";

interface Cat {
  id: string;
  breeds: {
    id: string;
    name: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    life_span: string; 
    wikipedia_url: string;
  }[];
  url: string;
  name: string;
  width: number;
}

const API_KEY = 'live_4yKfx4lZDgTLKXNOq4iR7yG1wDblgZe65OvKf0LQ72x7ffjKBabYoX4ADVv3eYQ3';

const Cats: React.FC = () => {
  const maximumCatsPerPage: number = 100;
  const apiUrl: string = `https://api.thecatapi.com/v1/images/search?limit=${maximumCatsPerPage}`;

  const [cats, setCats] = useState<Cat[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const requestCats = async (): Promise<void> => {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    };

    try {
      setIsLoading(true);

      const apiResponse: Response = await fetch(apiUrl, { headers });
      const jsonResult: Cat[] = await apiResponse.json();

      // Logging for debugging
      console.log("cats result", jsonResult);

      setCats(jsonResult);
    } catch (error) {
      console.error(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCats();
  }, []);

  // Filtrar los gatos que tienen información sobre sus razas
  const filteredCats = cats?.filter(cat => cat.breeds.length > 0);

  return (
    <Container>
      <Row className="justify-content-center">
        {isLoading ? (
          <Spinner animation="grow" />
        ) : filteredCats? (
          <>
            {filteredCats.map((cat) => (
              <Col key={cat.id} md={4} className="p-1">
                <CatDetails catDetails={cat} />
              </Col>
            ))}
          </>
        ) : (
          <h3 className="text-center text-danger fw-bold">
            No se encontraron gatos con información sobre sus razas
          </h3>
        )}
      </Row>
    </Container>
  );
};

export default Cats;
