import { Row } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas"
import { TypeBebidasProvider } from "./types";
import Bebida from "./Bebida";

const ListadoBebidas = () => {

    const { bebidas } = useBebidas() as TypeBebidasProvider;


    
    return (

        <Row className="mt-5">
            {bebidas?.map(bebida => (
                <Bebida key={bebida.idDrink} bebida={bebida} />
            ))}
        </Row>

    )
}

export default ListadoBebidas