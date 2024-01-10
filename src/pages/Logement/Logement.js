import { useParams, Navigate } from "react-router-dom";
import Data from "../../logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Rate from "../../components/Star/Star";
import Host from "../../components/Host/Host";
import SlideShow from "../../components/SlideShow/SlideShow";


const Logement = () => {

  /***  Récupère la bonne fiche ***/
  const { id } = useParams();

  const ficheLogement = Data.find((logement) => logement.id === id);

  /***  Tags  ***/
  const tagsLogement = ficheLogement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /***   Équipements  ***/
  const equipements = ficheLogement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <>
      {ficheLogement ? (
        <main>
          <SlideShow slides={ficheLogement?.pictures} />
          <section className="Fiche_logement">
            <div className="info">
              <div className="info_titletags">
                <div className="info_titletags_title">
                  <span className="titre-logement">{ficheLogement?.title}</span>
                  <span className="endroit-logement">
                    {ficheLogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="info_titletags_tags">
                  {tagsLogement}
                </div>
              </div>
              {/* Hosting */}
              <div className="info_proprietaire">
                <div className="info_proprietaire_nom">
                  <Host
                    name={ficheLogement?.host.name}
                    picture={ficheLogement?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="info_proprietaire_stars">
                  <Rate score={ficheLogement.rating} />
                </div>
              </div>
            </div>
          </section>
          {/* Collapse */}
          <div className="content">
            <div className="content_description">
              <Collapse
                title="Description"
                content={ficheLogement?.description}
              />
            </div>
            <div className="content_equipement">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </main>

      ) : (
        <Navigate replace to="/404" />
      )}
    </>
  );
};

export default Logement;
