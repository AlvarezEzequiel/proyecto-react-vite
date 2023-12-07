import { ProductList } from '../../components/productos/ProductList';
import { useFavoriteContext } from '../../context/Favorites';
import '../favorites/Favorites.css';


const Favorites = () => {

  
    const {favorite} = useFavoriteContext()

  return (
    <>
        
        <div>
            <h2 className='favoritos-titulo'>Mis Favoritos</h2>
            <section className='favorites'>
              {<ProductList 
              img={favorite}
              emptyHeading="Sin Favoritos"
              />}{/*esta dudoso ese atributo img para mostrar los productos*/}
            </section>
        </div>
        
    </>
  )
}

export default Favorites;