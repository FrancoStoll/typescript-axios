export type Props = {
    children: React.ReactNode
}

export type Bebida = {
    strDrink: string;
    strDrinkThumb?: string;
    idDrink: string;
}
export type Categorias = {
    strCategory: string
}

export interface BusquedaState {
    nombre: string;
    categoria: string;
}
export interface BebidaInt {
    bebida: Bebida;
}



export interface ConsultarBebidaInterface {
    consultarBebida: (value: BusquedaState) => Promise<void>
}

export type TypeBebidasProvider = {
    handleModalClick: () => void;
    bebidas?: Bebida[];
    consultarBebida: (value: BusquedaState) => Promise<void>
    modal: boolean;
    handleBebidaIdClick: (value: string) => void;
    receta: Drink;
    cargando: boolean;
}


