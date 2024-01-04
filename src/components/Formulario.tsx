import { Button, Form, Row, Col, Alert } from 'react-bootstrap'

import useCategorias from '../hooks/useCategorias'

import { FormEvent, useState } from 'react'
import useBebidas from '../hooks/useBebidas'
import { BusquedaState, Categorias, TypeBebidasProvider } from './types'




const Formulario = () => {



    const [busqueda, setBusqueda] = useState<BusquedaState>({
        nombre: '',
        categoria: ''
    })


    const { consultarBebida } = useBebidas() as TypeBebidasProvider



    const { categorias }: { categorias?: Categorias[] } = useCategorias();

    const [alerta, setAlerta] = useState<string>('')

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()


        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios');
            return
        }
        setAlerta('');
        consultarBebida(busqueda);

    }



    return (
        <Form
            onSubmit={handleSubmit}
        >
            {alerta && <Alert variant='danger' className='text-center'>{alerta}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor="nombre">Nombre:</Form.Label>
                        <Form.Control type='text' placeholder='Ej. Vodka'
                            name='nombre'
                            id='nombre'
                            onChange={(e) => setBusqueda(prev => {
                                return { ...prev, [e.target.name]: e.target.value }
                            })}
                            value={busqueda.nombre}
                        />


                    </Form.Group>
                </Col>
                <Col md={6}>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor="nombre">Categoria:</Form.Label>
                        <Form.Select id='categoria' name='categoria'
                            onChange={(e) => setBusqueda(prev => {
                                return { ...prev, [e.target.name]: e.target.value }
                            })}
                            value={busqueda.categoria}
                        >
                            <option value="">Selecciona categoria </option>
                            {categorias?.map((category: Categorias) => (
                                <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-end'>
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                        type='submit'
                    >
                        Buscar
                    </Button>
                </Col>

            </Row>
        </Form>
    )
}

export default Formulario