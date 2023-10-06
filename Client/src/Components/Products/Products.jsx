import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getCateg } from "../../redux/actions/action";
import { Product } from "../Product/Product";
import style from "./Products.module.css"
import FilterProducts from '../FilterProducts/FilterProducts';
// import ScrollReveal from "scrollreveal";




export const Products = () => {

  const dispatch = useDispatch();
  const [loadedCards, setLoadedCards] = useState(30); // Inicialmente cargamos 30 tarjetas
  // const [cardsToLoad, setCardsToLoad] = useState(30); // Cantidad de tarjetas a cargar adicionalmente
  
  const [selectedCategory, setSelectedCategory] = useState(""); // Estado para la categoría seleccionada

  
  useEffect(() => {
    // Reinicia el contador de tarjetas cargadas al cambiar la categoría
    setLoadedCards(30);

    // Realiza la carga inicial de productos
    dispatch(getProduct(loadedCards, 0, selectedCategory));
    dispatch(getCateg());
  }, [dispatch, selectedCategory]);

  

const categ = useSelector(state => state.categ);

const products = useSelector((state) => state.products);


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


      const handleLoadMore = () => {
        // const totalCards = 100; // Supongamos 100 tarjetas en total
        // const remainingCards = totalCards - loadedCards;
        // const nextLoad = Math.min(cardsToLoad, remainingCards);
      
        // dispatch(getProduct(nextLoad, loadedCards));
        // setLoadedCards(loadedCards + nextLoad);
        // setCardsToLoad(nextLoad);


        dispatch(getProduct(loadedCards, products.length, selectedCategory));
        setLoadedCards(loadedCards + 30);// Puedes ajustar la cantidad de tarjetas a cargar
      };


 




    return (
      <div>
        <FilterProducts categ={categ} setSelectedCategory={setSelectedCategory}/>

        <div className={style.cardsContainer}>
        {products?.map((producto) => {
          //  const cardClass = `${style.carlos} ${style.visible}`;

        return  (
          <div className={`${style.carlos} ${style.visible}`} key={producto.id}>
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
    </div>
    )
  }

  export default Products;




  
// export const Products = () => {
//   const dispatch = useDispatch();
//   const [loadedCards, setLoadedCards] = useState(30);
//   const [isScrollRevealEnabled, setIsScrollRevealEnabled] = useState(true); // Controla si se debe aplicar ScrollReveal

//   useEffect(() => {
//     dispatch(getProduct(loadedCards));
//     dispatch(getCateg());
//   }, [dispatch, loadedCards]);

//   const categ = useSelector((state) => state.categ);
//   const products = useSelector((state) => state.products);

//   const handleLoadMore = () => {
//     const totalCards = 100; // Supongamos 100 tarjetas en total
//     const remainingCards = totalCards - loadedCards;
//     const nextLoad = Math.min(30, remainingCards);

//     dispatch(getProduct(nextLoad, loadedCards));
//     setLoadedCards(loadedCards + nextLoad);

//     // Deshabilitar ScrollReveal temporalmente al cargar más tarjetas
//     setIsScrollRevealEnabled(false);

//     // Espera un breve momento antes de volver a habilitar ScrollReveal
//     setTimeout(() => {
//       setIsScrollRevealEnabled(true);
//     }, 100);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + window.scrollY >=
//         document.body.offsetHeight - 200
//       ) {
//         handleLoadMore();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (isScrollRevealEnabled) {
//       initializeScrollReveal();
//     }
//   }, [isScrollRevealEnabled]);

//   const initializeScrollReveal = () => {
//     ScrollReveal().reveal('.card', {
//       duration: 800,
//       distance: '20px',
//       origin: 'bottom',
//       easing: 'ease-out',
//       reset: false,
//     });
//   };

//   return (
//     <div>
//       <FilterProducts categ={categ} />

//       <div className={style.cardsContainer}>
//         {products?.map((producto) => {
//           return (
//             <div
//               className={`card ${style.card}`}
//               key={producto.id}
//             >
//               <Product
//                 nombre={producto.title}
//                 descripcion={producto.description}
//                 imagen={producto.images[0]}
//                 precio={producto.price}
//                 categoria={producto.category}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };