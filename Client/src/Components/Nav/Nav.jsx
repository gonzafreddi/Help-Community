import { Link } from 'react-router-dom';
import { useState } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
import Login from '../Login/Login';
import './Nav.css';


export const Nav = () => {

    const [loginOpen, setLoginOpen] = useState(false);
    
    const openLogin = () => {
      setLoginOpen(true);
      document.body.style.overflow = 'hidden';
    };
  
    const closeLogin = () => {
      setLoginOpen(false);
      document.body.style.overflow = 'unset';
    };

    return (
        <nav className='Nav'>
            
            <div className='nav-container'>

                <div className='nav-button-container'>
                    <Link to={'/'}>
                        <button className='nav-button'>Home</button>
                    </Link>
                    <Link to={'/about'}>
                        <button className='nav-button'>Acerca de</button>
                    </Link>
                    {/* <Link to='/createcampaign'> */}
                        <Link to={"/create/campaign"}>
                            <button className='nav-button' > Crea una campaña! </button>
                        </Link>
                        <Link to={"/products"}>
                            <button className='nav-button' >Productos</button>
                        </Link>
                    {/* </Link> */}
                    {/* <UploadWidget/> */}
                </div>


                <div className='sb-and-login'>
                    {/* <div className='sb'>
                        <SearchBar/>

                    </div> */}
                    {/* <Link to={"/login"}> */}
                        <button className='nav-button' onClick={openLogin}>Iniciar Sesion</button>
                        {loginOpen && <Login closeLogin={closeLogin} />}
                    {/* </Link> */}
                </div>


            </div>

        </nav>
    )
}
