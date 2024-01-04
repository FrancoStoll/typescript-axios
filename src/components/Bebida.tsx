import { Button, Card, Col } from 'react-bootstrap'
import { BebidaInt, TypeBebidasProvider } from './types'
import useBebidas from '../hooks/useBebidas'



const Bebida = ({ bebida }: BebidaInt) => {

    const { handleModalClick, handleBebidaIdClick } = useBebidas() as TypeBebidasProvider


    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img
                    variant='top'
                    src={bebida.strDrinkThumb}
                    alt={`imagen de ${bebida.strDrink}`}
                />
                <Card.Body>
                    <Card.Title>
                        {bebida.strDrink}
                    </Card.Title>

                    <Button className='w-100 text-uppercase mt-2' variant='danger'
                        onClick={() => {
                            handleModalClick()
                            handleBebidaIdClick(bebida.idDrink);
                        }}
                    >
                        Ver Receta
                    </Button>
                </Card.Body>
            </Card>

        </Col>
    )
}

export default Bebida