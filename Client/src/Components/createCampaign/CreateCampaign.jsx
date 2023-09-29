import style from "./createCampaign.module.css"
export default function CreateCampaign(){
    return(<div className={style.bodyConteiner}>
        <div className={style.formConteiner}>
         
            <form action="">
            <h1>Crear una campaña</h1>
                <label className={`${style.title}`} htmlFor=""><h3>Colocale un nombre a tu campaña</h3></label>
                <input className={style.nameAndPrice} type="text" name="" id="" />

                <label className={`${style.title}`} htmlFor=""><h3>resumen de su descripcion</h3></label>
                <input className={style.nameAndPrice} type="text" name="" id="" />
                <label className={style.title} htmlFor=""><h3>Describe tu campaña</h3></label>
                <textarea name="" id="" cols="30" rows="10" readonly></textarea>

                <label className={style.title}  htmlFor=""><h3>Añade una imagen a tu campaña</h3></label>
                <button className={style.send}>Subir Foto</button>

               <div className={style.selectsConteiner}>
                <div className={style.state} >
                <label className={style.title}  htmlFor=""><h3>¿En que provincia se encuntra tu campaña?</h3></label>

                <select name="" id="">
                <option value="">Provincia</option>
                <option value="">buenos aires</option>
                </select>

                </div>
                 
              <div>
              <label className={style.title}  htmlFor=""><h3>¿Cuando finaliza tu campaña?</h3></label>
                
                <select name="" id="">
                <option value="" selected>Dia</option>
                <option value="">1</option>
                <option value="">2</option>
                </select>

                <select name="" id="">
                <option value="" selected>Mes</option>
                <option value="">Enero</option>
                <option value="">Febrero</option>
                </select>

                <select name="" id="">
                <option value="" selected>Año</option>
                <option value="">2024</option>
                <option value="">2025</option>
                </select>
              </div>

               </div>
              

                <h3 className={style.title} >¿Cuales son las razones principales por las que vas a recaudar dinero</h3>
                
              <select name="" id="">
                <option value="">salud</option>
                <option value="">salud</option>
                <option value="">salud</option>
              </select>
              <h3 className={style.title} >¿Cuanto te gustaria recaudar?</h3>
             <div className={style.monto}>
             
              <p className={style.peso}>
                $
              </p>
              <input className={style.nameAndPrice} type="number" />
                <p className={style.ars}>ARS</p>
             </div>
          

           <div className={style.sendCont}> <input className={style.send}type="submit" /></div>
            </form>
        </div>
    </div>)
}