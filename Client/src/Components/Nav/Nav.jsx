// import { Link } from 'react-router-dom';
import './Nav.css'
import UploadWidget from '../UploadWidget/UploadWidget';
import SearchBar from '../SearchBar/SearchBar';


export const Nav = () => {
    return (
        <nav className='Nav'>
            
            <div className='nav-container'>

                <div className='nav-button-container'>
                    <button className='nav-button'>Home</button>
                    <button className='nav-button'>Acerca de</button>
                    {/* <Link to='/createcampaign'> */}
                        <button className='nav-button' > Crea una campaña! </button>
                    {/* </Link> */}
                    {/* <UploadWidget/> */}
                </div>


                <div className='sb-and-login'>
                    <div className='sb'>
                        <SearchBar/>

                    </div>
                    <button className='nav-button'>Iniciar Sesion</button>
                </div>


            </div>

        </nav>
    )
}
