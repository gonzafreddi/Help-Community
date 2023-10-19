import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Login from '../Login/Login';
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { ToastContainer, toast } from 'react-toastify';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SearchBar/SearchBar';
import { UserNav } from '../userComponents/userNav/userNav';
import './Nav.css';
import { getUserByEmail } from '../../redux/actions/action';


export const Nav = () => {
    const cart = useSelector((state) => state.cartShop);
    const totalProduct = cart.length;
  
    const auth = useAuth();
    const dispatch = useDispatch();
    
    const { email } = auth.user;
    const [loginOpen, setLoginOpen] = useState(false);
    
    const openLogin = () => {
      setLoginOpen(true);
      document.body.style.overflow = 'hidden';
    };
  
    const closeLogin = () => {
      setLoginOpen(false);
      document.body.style.overflow = 'unset';
    };

    const handleLogout = async () => {
        auth.logout();
        await dispatch(getUserByEmail('logout'))

    }

    const toastOptions = {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    const notify = (type) => {
        
        switch (type) {
            case 'logSuccess':
                toast.success('Sesión iniciada correctamente', toastOptions);
                break;
            case 'regError':
                toast.error('Ocurrio un error en el registro, intentelo nuevamente', toastOptions);
                break;
            case 'googleSuccess':
                toast.success('Ingreso con Google realizado correctamente', {...toastOptions, delay:1500});
                break;
            default:
                // Código a ejecutar si el tipo no coincide con ningún caso
                break;
        }
    };

    const showNotification = (type) => {
        notify(type);
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
                        {/* <Link to={"/create/campaign"}>
                            <button className='nav-button' > Crear una campaña </button>
                        </Link>
                        <Link to={"/create/product"}>
                            <button className='nav-button' > Crear un producto </button>
                        </Link> */}
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
                    {loginOpen && <Login closeLogin={closeLogin} showNotification={showNotification} />}

                    {
                        email ? <button className='nav-button'><Link to={"/userProfile"}><UserNav/></Link></button> : null
                    }

                </div>


            </div>
            <ToastContainer />
        </nav>
    )
}
