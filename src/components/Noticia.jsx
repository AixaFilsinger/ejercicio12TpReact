import { Col, Card, Button } from "react-bootstrap";

const Noticia = ({noticia}) => {
  return (
    <>
    <Col md={4} className="mb-3">
      <Card>
        <Card.Img variant="top" src={noticia.image_url} />
        <Card.Body>
          <Card.Title>{noticia.title}</Card.Title>
          <Card.Text>
            {noticia.description}
          </Card.Text>
          <Button variant="primary">Ver</Button>
        </Card.Body>
      </Card>
    </Col>
    </>
  );
};


export default Noticia;
