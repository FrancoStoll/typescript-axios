import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Bebida, ConsultarBebidaInterface, Props } from "../components/types";



const BebidasContext = createContext({});


const BebidasProvider = ({ children }: Props) => {

    const [bebidas, setBebidas] = useState<Bebida[]>([])
    const [modal, setModal] = useState<boolean>(false)
    const [bebidaId, setBebidaId] = useState('');
    const [receta, setReceta] = useState<Drink | null>(null);
    const [cargando, setCargando] = useState(false)


    useEffect(() => {
        setCargando(true);
        async function obtenerReceta() {
            if (!bebidaId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

                const { data } = await axios(url)

                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false);
            }
        }

        obtenerReceta();

    }, [bebidaId])


    const consultarBebida: ConsultarBebidaInterface['consultarBebida'] = async (datos) => {

        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

            const { data } = await axios.post(url)

            setBebidas(data.drinks);
        } catch (error) {
            console.log(error)
        }

    }

    const handleModalClick = () => {

        setModal(!modal)
    }

    const handleBebidaIdClick = (id: string): void => {
        setBebidaId(id);
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                handleModalClick,
                modal,
                handleBebidaIdClick,
                receta,
                cargando
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider,

}

export default BebidasContext;