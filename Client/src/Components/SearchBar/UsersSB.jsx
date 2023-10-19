import style from './UsersSB.module.css';

const UsersSB = ({ handleInputChange, placeholder }) => {


    return(

        <div className={style.containerSB}>

            <div className={style.inputContainer}>
                <input 
                    className={style.searchInput}
                    type='search'
                    onChange={handleInputChange}
                    placeholder={placeholder}
                />
            </div>

        </div>

    )

}

export default UsersSB;