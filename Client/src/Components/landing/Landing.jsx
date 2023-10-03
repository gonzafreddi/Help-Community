import { Link } from "react-router-dom"
export default function Landing(){
    return(<div>
        <h1>Esta va a ser la landing</h1>
        <Link to={"/products"}>
        <button>ingresar</button>
        </Link>
    </div>)
}