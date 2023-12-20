import Banner from "../../components/Banner/Banner";
import imgHomeBanner from "../../assets/images/banner/aboutBanner.png";
import Collapse from "../../components/Collapse/Collapse";

function About() {
    return (
        <div className='container'>
            <Banner image={imgHomeBanner} />
            <Collapse title="Fiabilité"></Collapse>
            <Collapse title="Respect">  </Collapse>
            <Collapse title="Service"> </Collapse>
            <Collapse title="Sécurité">  </Collapse>
        </div>
    )
}
export default About;