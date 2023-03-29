import Card from "../componente/Card"
import Carousle from "../componente/Carousle"
import WithLayout from "../layout"

const Home=()=>{
    return (
        <div>
        <Carousle/>
        <div className="m-3">
        <Card/>
        </div>
         
        </div>
    )
}

export default WithLayout(Home)