import axios from "axios";
import { useState, useEffect, createContext, ReactNode } from "react";

const CategoriasContext = createContext({});


interface Props {
    children: ReactNode
}
interface Categoria {
    strCategory: string;
}



const CategoriasProvider = ({ children }: Props) => {


    const [categorias, setCategorias] = useState<Categoria[]>([])

    useEffect(() => {
        const obtenerCategorias = async () => {

            try {

                const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

                const { data } = await axios(url)

                setCategorias(data.drinks)

            } catch (error) {
                console.log(error)
            }
        }
        obtenerCategorias()
    }, [])


    return (
        <CategoriasContext.Provider
            value={
                {
                    categorias
                }
            }
        >
            {children}
        </CategoriasContext.Provider>
    )
}


export {
    CategoriasProvider
}

export default CategoriasContext;