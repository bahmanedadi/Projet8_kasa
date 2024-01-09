import Data from "../../logements.json";
import Card from "../../components/Card/Card";

function Gallery() {
    return (
        <div className="gallery">
            {
                Data.map(({ id, title, cover }) => (
                    <Card title={title} image={cover} id={id} key={id} />
                ))
            }
        </div>
    )
}

export default Gallery;
