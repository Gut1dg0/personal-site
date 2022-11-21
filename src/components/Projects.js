import recopilador from '../assets/recopilador.jpg'
import hairday from '../assets/hair-day.jpg'
import realestate from '../assets/real-estate.jpg'

function Projects() {
    let blank = "_blank";
    return(
        <>
            <h1>My Projects</h1>
            <div>
                <h2>Recopilador de informes</h2>
                <a href="https://gut1dg0.github.io/Recopilador-de-informes/" target={blank}><img src={recopilador} alt="canti parada" width={200} /></a>
                <h2>Hair Day Boutique</h2>
                <a href="https://gut1dg0.github.io/hair-day/" target={blank}><img src={hairday} alt="Hair Day Boutique" width={200}/></a>
                <h2>Real Estate Agent</h2>
                <a href="https://gut1dg0.github.io/real-estate-project/" target={blank}><img src={realestate} alt="Real Estate Agent" width={200}/></a>
            </div>
        </>
    );
};

export default Projects;