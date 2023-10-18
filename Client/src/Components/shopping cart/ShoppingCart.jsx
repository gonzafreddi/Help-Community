import { useEffect } from "react";
import Buy from "./buy";
import CardShopping from "./cardShopping";
import style from "./shoppingCart.module.css";
import { useSelector } from "react-redux";
import { setItem } from "../../utils/localStorage";
import NoItemTocart from "./noItemTocar";
import { useAuth } from "../../context/AuthContext";
import { useDispatch } from "react-redux";
import { getCar } from "../../redux/actions/action";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cartShop);
  const dispatch = useDispatch()
  const auth = useAuth()
  const {email} = auth.user
  console.log(email)
  useEffect(() => {
    // dispatch(getCar(email))
    dispatch(getCar(email, cart))
  }, []);
console.log(cart)

  return (
    <div className={style.conteiner}>
      <div className={style.cont}>
        <div className={style.items}>
          {cart?.length > 0 ? (
            cart.map((e, index) => {
              console.log(e);
              return (
                <CardShopping
                  key={index}
                  id={e.id}
                  name={e.name}
                  price={e.price}
                  rating={e.rating}
                  stock={e.stock}
                  image={e.image}
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
