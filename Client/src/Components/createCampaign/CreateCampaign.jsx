import style from "./createCampaign.module.css"
export default function CreateCampaign(){
    return(<div className={style.bodyConteiner}>
        <div className={style.formConteiner}>
            <form action="">
                <label className={`${style.title}`} htmlFor=""><h3>Colocale un nombre a tu campaña</h3></label>
                <input className={style.nameAndPrice} type="text" name="" id="" />

                <label className={style.title} htmlFor=""><h3>Describe tu campaña</h3></label>
                <textarea name="" id="" cols="30" rows="10" readonly></textarea>

                <label className={style.title}  htmlFor=""><h3>Añade una imagen a tu campaña</h3></label>
                <button>Subir Foto</button>

                <label className={style.title}  htmlFor=""><h3>¿En que provincia se encuntra tu campaña?</h3></label>

                <select name="" id="">
                <option value="">Provincia</option>
                    <option value="">buenos aires</option>
                </select>
                <input type="number"  placeholder="Codigo postal"/>

                <h3 className={style.title} >¿Cuales son las razones principales por las que vas a recaudar dinero</h3>
                
              <label for="">
                <input type="checkbox" />
                opcion1
              </label>
              <label for="">
                <input type="checkbox" />
                opcion1
              </label>
              <label for="">
                <input type="checkbox" />
                opcion1
              </label>
              <label for="">
                <input type="checkbox" />
                opcion1
              </label>

              <h3 className={style.title} >¿Cuanto te gustaria recaudar?</h3>
              <p>
                $
              </p>
              <input className={style.nameAndPrice} type="number" />
                <p>ARS</p>
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

            <input type="submit" />
            </form>
        </div>
    </div>)
}