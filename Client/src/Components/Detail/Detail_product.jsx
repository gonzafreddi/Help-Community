import style from "./detail_campain.module.css"
export const DetailProduct = ()=>{
    return (<div className={style.conteiner}>
        <div className={style.productCont}>
        <div className={style.imgCont} >
            <img src="https://http2.mlstatic.com/D_NQ_NP_2X_990887-MLA49448372502_032022-F.webp" alt="" />
        </div>
        <div className={`${style.column} ${style.infoProduct}`}>
        <p>+500 vendidos</p>
        <h1>Nombre del producto</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cum earum perspiciatis harum facilis itaque mollitia? Ullam ratione sint nam fugiat, culpa maiores repudiandae.</p>
        <div className={style.price}><p>$14.987</p></div>
        <div className={style.buyCont}>
            <button className={style.btnBuy}>Comprar</button>
            <button className={style.btnAddToCart}>Agregar al carrito</button>
        </div>
        </div>

        </div>
    </div>)
}