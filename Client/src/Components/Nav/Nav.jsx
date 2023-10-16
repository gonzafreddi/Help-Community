import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Login from '../Login/Login';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { UserNav } from '../userComponents/userNav/userNav';
import './Nav.css';
import { verifyLog } from '../../utils/verifyLog';
import { saveCartDb } from '../../utils/localStorage';
import { clearCart } from '../../redux/actions/action';
import { useDispatch } from 'react-redux';
export const Nav = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartShop);
    const totalProduct = cart.length;
    const auth = useAuth();
    const { email } = auth.user;
    verifyLog(email)
    saveCartDb(email)
    const [loginOpen, setLoginOpen] = useState(false);
    const openLogin = () => {
      setLoginOpen(true);
      document.body.style.overflow = 'hidden';
    };
    const closeLogin = () => {
      setLoginOpen(false);
      document.body.style.overflow = 'unset';
    };
    function handleLogout() {
        auth.logout();
        dispatch(clearCart())
    }
    return (
        <nav className='Nav'>
            
            <div className='nav-container'>

                <div className='nav-button-container'>
                    <Link to={'/'}>
                        <button className='nav-button'>Landing</button>
                    </Link>
                    <Link to={'/about'}>
                        <button className='nav-button'>Acerca de</button>
                    </Link>
                    {/* <Link to='/createcampaign'> */}
                        <Link to={"/create/campaign"}>
                            <button className='nav-button' > Crear una campaña </button>
                        </Link>
                        <Link to={"/create/product"}>
                            <button className='nav-button' > Crear un producto </button>
                        </Link>
                        <Link to={"/products"}>
                            <button className='nav-button' >Productos</button>
                        </Link>
                        <Link to={"/shoppingCart"}>
                        <button className='nav-button' > <div className='cart-item'><FontAwesomeIcon icon={faCartShopping}/><p >{cart.length > 0 ?totalProduct : null}</p></div></button>
                      
                        </Link>
                    {/* </Link> */}
                    {/* <UploadWidget/> */}
                </div>


                <div className='sb-and-login'>
                    <div className='sb'>
                        <SearchBar/>

                    </div>
                    {
                        email 
                        ? <button className='nav-button' onClick={handleLogout}>Cerrar Sesion</button>
                        : <button className='nav-button' onClick={openLogin}>Iniciar Sesion</button>
                    }
                    {loginOpen && <Login closeLogin={closeLogin} />}

                    {
                        email ? <button className='nav-button'><Link to={"/userProfile"}><UserNav/></Link></button> : null
                    }

                </div>


            </div>

        </nav>
    )
}
