import { Container, Row } from "react-bootstrap";
import Noticia from "./Noticia";


const ListaNoticias = ({noticias}) => {
    return (
        <Container>
            <Row>
            {noticias.map((noticia,indice) => (<Noticia key={indice} noticia={noticia}></Noticia>))}
            </Row>
        </Container>
    );
};

export default ListaNoticias;