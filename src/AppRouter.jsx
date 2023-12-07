import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import GestionPociones from "./pages/GestionPociones";
import Productos from "./pages/Productos";
import { Navegation } from "./components/Navegation";
import Carrito from "./components/Carrito";
import Favorites from "./pages/favorites/favorites";
import FavoritesProvider from "./context/Favorites";








export const AppRouter = () => {
  return (
    <>
    <FavoritesProvider>
    <Navegation />
    
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/pociones" element = {<GestionPociones />} />
            <Route path="/productos" element = {<Productos/>}/>
            <Route path="/carrito" element = {<Carrito/>}/>
            <Route path="/favorites" element = {<Favorites />}/>
        </Routes>
    </FavoritesProvider>
    </>
  )
}
