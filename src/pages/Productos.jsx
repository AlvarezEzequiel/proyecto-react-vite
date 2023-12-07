import { Pagination } from "../components/productos/Pagination";
import { ProductList } from "../components/productos/ProductList";
import  "../components/productos/Productos.css";



function Productos(){
    return(
    <div>
        <h2 className="title">Cafe</h2>
        
        <ProductList />
        
    </div>
    )
}
export default Productos;