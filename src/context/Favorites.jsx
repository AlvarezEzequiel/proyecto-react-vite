import { createContext, useContext, useState } from "react";


export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({children}){
    
    const [favorite, setFavorite] = useState([]);

    return(
        <FavoritesContext.Provider
            value={{favorite, setFavorite}}
        >
            { children }
        </FavoritesContext.Provider>
    );
}

// Hook personalizado
export function useFavoriteContext (){
    const {favorite, setFavorite} = useContext(FavoritesContext)

    function addFavorite (newFavorite){
        
        // Verificar si el item favorito esta repetido
        const repeatedFavorite = favorite.some((item => item.id === newFavorite.id))

        // Nueva lista recive la lista anterior
        let newList = [...favorite]

        // Verificar q no se haya repetido y agregar el elemento a la lista de favoritos
        if(!repeatedFavorite){
            newList.push(newFavorite)

            return setFavorite(newList)
        }
        
        // Si se repite sera eliminado de la lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id)
        
        return setFavorite(newList)
    }

    return{
        favorite,
        addFavorite
    }
}