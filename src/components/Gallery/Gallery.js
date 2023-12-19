import Data from "../../logements.json";
import Card from "../../components/Card/Card";
function Gallery(){
    return(
        <div className="gallery">
 {
            Data.map(({ title,  cover})=>(
                <Card title={title} image={cover}/> 
            )
            )
        }
        </div>
    )
}
export default Gallery;
