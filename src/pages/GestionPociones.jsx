import { useState, useEffect } from "react";
import ListaDePociones from "../components/ListaDePociones";
import FormularioDePociones from "../components/FormularioDePociones"
import Footer from "../components/footer/Footer";





const GestionPociones = () =>{
//Estado para almacenar las pociones
const [pociones, setPociones] = useState([]);

//Carga inicial de pociones desde localStorage
useEffect(() => {
    const pocionesGuardadas = JSON.parse(localStorage.getItem
        ('pociones'));
    if (pocionesGuardadas){
        setPociones(pocionesGuardadas)
    }
}, []);

//Almacena las pociones en localStorage cuando cambia el estado
useEffect(() => {
    
    localStorage.setItem('pociones', JSON.stringify(pociones))
}, [pociones])

//Marcar una pocion como completada o no
const completarPocion = (id) =>{
    const nuevasPociones = pociones.map((pocion) => 
    pocion.id === id ? { ...pocion, completada: !pocion.
        completada}:pocion)
    setPociones(nuevasPociones);
}

// Eliminar pocion de la lista
const eliminarPocion = (id) =>{
    const nuevasPociones = pociones.filter((pocion) => pocion.id !== id);
    setPociones (nuevasPociones)
}

//Agregar la pocion a la lista

const agregarPocion = (nombre) => {
    const nuevaPocion = {
        id: Date.now(),//generar id unico para gurdarlo etc
        nombre,
        completada: false,
    }
    setPociones([...pociones, nuevaPocion])
}
    return(
        <div>
            
            <h4>Gestion de Pociones</h4>
                <ListaDePociones
                pociones = {pociones}
                completarPocion = {completarPocion}
                eliminarPocion = {eliminarPocion}
                />
                    
            <FormularioDePociones agregarPocion={agregarPocion}/>

            <Footer/>
        </div>
    )
}
export default GestionPociones;