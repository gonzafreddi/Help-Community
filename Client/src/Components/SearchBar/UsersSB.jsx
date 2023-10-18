import style from './UsersSB.module.css';

const UsersSB = ({ handleInputChange }) => {


    return(

        <div className={style.containerSB}>

            <div className={style.inputContainer}>
                <input 
                    className={style.searchInput}
                    type='search'
                    onChange={handleInputChange}
                    placeholder='Busca usuarios por id, nombre o email'
                />
            </div>

        </div>

    )

}

export default UsersSB;