import { Col, Card, Button } from "react-bootstrap";
import { useBebidas } from "../hooks";

export const Bebida = ({bebida}) => {

  const { handleModalClick , handleBebidaIdClick } = useBebidas();
  const handleAddFavorites = () => {
    console.log('Añadiendo a favoritos');
    console.log(bebida);
  }

  return (
    <Col md={6} lg={3}>
        <Card className="mb-4">
            <Card.Img 
                variant="top"
                src={bebida.strDrinkThumb}
                alt={`Imagen de ${bebida.strDrink}`}
            />        
            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button
                    variant={'warning'}
                    className="w-100 text-uppercase mt-2"
                    onClick={ () => {
                        handleModalClick()
                        handleBebidaIdClick(bebida.idDrink)
                    }}
                >
                    Ver Receta
                </Button>
                <Button
                    variant={'success'}
                    className="w-100 text-uppercase mt-2"
                    onClick={ () => handleAddFavorites() }
                >
                    Añadir a Favoritos
                </Button>
                
            </Card.Body>
        </Card>
    </Col>
  )
}

