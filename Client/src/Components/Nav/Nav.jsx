import { Link } from 'react-router-dom';
import './Nav.css'


export const Nav = () => {
    return (
        <nav className='Nav'>
            
            <div className='nav-container'>

                <button>Home</button>
                <button>Acerca de</button>
                <div>
                    <Link to='/createcampaign'>
                        <button className='create-button' > Crea una campaña! </button>
                    </Link>
                </div>

            </div>

        </nav>
    )
}
