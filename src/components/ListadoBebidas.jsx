import { Row } from "react-bootstrap";
import { useBebidas } from "../hooks";
import { Bebida } from "./Bebida";

export const ListadoBebidas = () => {

  const { bebidas } = useBebidas();

  return (
    <Row>
        {bebidas.map(bebida => (
            <Bebida 
                key={bebida.idDrink}
                bebida={bebida}
            />
        ))}
    </Row>
  )
}
