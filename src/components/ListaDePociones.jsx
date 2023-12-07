import Pocion from "./Pocion";

const ListaDePociones = ({pociones, completarPocion, eliminarPocion}) => { 

    return(
        <div>
            <h3>Inventario de Pociones</h3>
            {pociones.map((pocion) => (
                <Pocion
                key = {pocion.id}
                pocion = {pocion}
                completarPocion = {completarPocion}
                eliminarPocion = {eliminarPocion}
                />
            )
            )}
        </div>
    )
}
export default ListaDePociones;