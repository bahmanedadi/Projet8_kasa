import Data from "../../logements.json";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

function Gallery() {
    return (
        <div className="gallery">
            {
                Data.map(({ id, title, cover }) => (
                    <Link to={`Logement/${id}`} key={id}>
                        <Card title={title} image={cover} />
                    </Link>

                ))
            }
        </div>
    )
}

export default Gallery;
