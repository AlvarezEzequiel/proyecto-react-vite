import { useEffect, useState } from "react"
import { Pagination } from "./Pagination";
import iconFavorite from '../../assets/img/favorite.png'; //Blanco
import iconUnfavorite from '../../assets/img/unfavorite.png'//Rojo
import '../../pages/favorites/favorites.css';
import { useFavoriteContext } from "../../context/Favorites";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  const totalProducts = products.length;

  const [productsPerPage, setProductsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  
  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  const productList = async() =>{
    const data = await fetch('https://api.sampleapis.com/coffee/hot');
    const products = await data.json();
    console.log(products)
    setProducts(products);
  }
    useEffect(() =>{
      productList();
    },[]);

    // LLamado al hook personalizado
    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icon = isFavorite ? iconUnfavorite : iconFavorite

  return (

    <>
      <div className="container-products">
        {products.map(product => (
          <div className="card-product" key={product.id}>
            <figure className="container-img">
              <img src={product.image} alt={product.title} />
              <div className="info-product">
                <h3>{product.title}</h3>
                <h4>{product.description}</h4>
                <span className="price">${product.price}</span>
                <span className="corazon">
                  <figure className="styles-icon">
                    <img 
                    src={icon} 
                    alt="icono corazon" 
                    onClick={() => addFavorite({id})}
                    />
                  </figure>
                </span>
                <button>Aniadir al carrito</button>
              </div>
            </figure>
            
          </div>
        )).slice(firstIndex, lastIndex)}
      </div>

      <Pagination 
      productsPerPage = {productsPerPage} 
      currentPage = {currentPage} 
      setCurrentPage = {setCurrentPage}
      totalProducts = {totalProducts}/>
      
    </>


    
  )
}
