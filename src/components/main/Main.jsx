import './Main.css'
import cervezaMain from '../../assets/img/cervezaMain.jpg';
import rabasMain from '../../assets/img/rabasMain.jpg';
import pizzaMain from '../../assets/img/pizzaMain.jpg';
import burguerMain from '../../assets/img/burguerMain.jpg';
import drinksMain from '../../assets/img/drinksMain.jpg';
import postreMain from '../../assets/img/postreMain.avif';
import Aside from '../aside/Aside';
function Main (){
    return(

        <section className="contenedor__Grid">
        <div className="boxCerveza">
            <img className="imgCervezaMain" src={cervezaMain} alt=""/>
            <h3>Cervza</h3>
        </div>
        <div className="boxPicada">
            <img className="imgPicadaMain" src={rabasMain} alt=""/>
            <h3>Para Picar</h3>
        </div>
        <div className="boxPizza">
            <img className="imgPizzaMain" src={pizzaMain} alt=""/>
            <h3>Pizzas</h3>
        </div>
        <div className="boxBurguer">
            <img className="imgBurguerMain" src={burguerMain} alt=""/>
            <h3>Burguers</h3>
        </div>
        <div className="boxDrinks">
            <img className="imgDrinksMain" src={drinksMain} alt=""/>
             <h3>Drinks</h3>
        </div>
        <div className="boxPostres">
            <img className="imgPostreMain" src={postreMain} alt=""/>
            <h3 className='titulos-main'>Postres</h3>
        </div>
        <Aside />
    </section>
    )
}
export default Main;