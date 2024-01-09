import { Link } from "react-router-dom";


function Card({ id, image, title }) {
  return (
    <div className="card">
      <Link to={`Logement/${id}`}>
        <img className="card_img" src={image} alt={title} />
        <h2 className="card_title">{title}</h2>
      </Link>
    </div>
  )
}
export default Card;