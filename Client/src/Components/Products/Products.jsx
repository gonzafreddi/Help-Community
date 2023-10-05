import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getCateg } from "../../redux/actions/action";
import { Product } from "../Product/Product";
import style from "./Products.module.css"
import FilterProducts from '../FilterProducts/FilterProducts';
import ScrollReveal from "scrollreveal";
// import Pagination from "../Pagination/Pagination";


export const Products = () => {

  const dispatch = useDispatch();
  const [loadedCards, setLoadedCards] = useState(30); // Inicialmente cargamos 30 tarjetas
  const [cardsToLoad, setCardsToLoad] = useState(30); // Cantidad de tarjetas a cargar adicionalmente
  

  const initializeScrollReveal = () => {
    ScrollReveal().reveal('.card', {
      duration: 800, // Duración de la animación (en milisegundos)
      distance: '20px', // Distancia desde la que aparecerán los elementos
      origin: 'bottom', // Dirección desde la que aparecerán los elementos (puedes cambiarlo)
      easing: 'ease-out',
      reset: false, // Para que las tarjetas no se vuelvan a animar al desplazar hacia arriba
    });
  };


  
useEffect(() => {
  dispatch(getProduct(loadedCards));
  dispatch(getCateg());
}, [dispatch, loadedCards]);


  

const categ = useSelector(state => state.categ);

const products = useSelector((state) => state.products);


      const handleLoadMore = () => {
        const totalCards = 100; // Supongamos 100 tarjetas en total
        const remainingCards = totalCards - loadedCards;
        const nextLoad = Math.min(cardsToLoad, remainingCards);
      
        dispatch(getProduct(nextLoad, loadedCards));
        setLoadedCards(loadedCards + nextLoad);
        setCardsToLoad(nextLoad);

        initializeScrollReveal();
        
      };

      useEffect(() => {
        const handleScroll = () => {
          if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 200
          ) {
            // El usuario ha llegado al final de la página
            handleLoadMore();
          }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


    return (
      <div>
        <FilterProducts categ={categ}/>

        <div className={style.cardsContainer}>
        {products?.map((producto) => {

        return  (
          <div className={`${style.card} card`} key={producto.id}>
                  <Product
                  // key={producto.id}
                  nombre={producto.title}
                  descripcion={producto.description}
                  imagen={producto.images[0]}
                  precio={producto.price}
                  categoria={producto.category}
                />
                </div>
        );
        })}
      </div>
      {/* <button className={style.buttonCarga} onClick={handleLoadMore}>Cargar más</button> */}
    </div>
    )
  }

  export default Products;