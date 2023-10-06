import { useEffect } from "react";
import Buy from "./buy";
import CardShopping from "./cardShopping";
import style from "./shoppingCart.module.css";
import { useSelector } from "react-redux";
import { setItem } from "../../utils/localStorage";
import NoItemTocart from "./noItemTocar";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cartShop);

  useEffect(() => {
    setItem("cartShop", cart);
  }, [cart]);

  return (
    <div className={style.conteiner}>
      <div className={style.cont}>
        <div className={style.items}>
          {cart?.length > 0 ? (
            cart.map((e, index) => {
              return (
                <CardShopping
                  key={index}
                  id={e.product.id}
                  name={e.product.nombre}
                  price={e.product.precio}
                  rating={e.rating}
                  stock={e.product.stock}
                  image={e.product.imagen}
                  quantity={e.quantity}
                />
              );
            })
          ) : (
            <NoItemTocart />
          )}
        </div>
        {cart?.length > 0 && <Buy />} {/* Renderiza Buy solo si hay elementos en el carrito */}
      </div>
    </div>
  );
}
