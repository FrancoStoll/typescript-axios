import { Image, Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"
import { TypeBebidasProvider } from "./types"


const ModalBebida = () => {

  const { modal, handleModalClick, receta, cargando } = useBebidas() as TypeBebidasProvider

 

  const mostrarIngredientes = (): JSX.Element => {

    const ingredientes: JSX.Element[] = [];
    for (let i = 1; i < 16; i++) {


      if (receta && receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li key={receta.idDrink}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
        )
      }
    }

    return <div>{ingredientes}</div>
  }

  return (
    !cargando && (<Modal show={modal} onHide={handleModalClick}>
      <Image src={receta?.strDrinkThumb}
        alt={`imagen de receta ${receta?.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>{receta?.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h2>Instrucciones</h2>
          {receta?.strInstructions}
          <h2>Ingredientes</h2>
          {mostrarIngredientes()}
        </div>
      </Modal.Body>
    </Modal>
    )
  )
}

export default ModalBebida