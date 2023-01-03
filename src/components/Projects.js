import recopilador from '../assets/recopilador.jpg'
import hairday from '../assets/hair-day.jpg'
import realestate from '../assets/real-estate.jpg'
import { Box, Center, Heading, Text } from '@chakra-ui/react';

function Projects() {
    let blank = "_blank";
    return(
        <Box id='projects-section'>
            <Center>
                <Heading>My Projects</Heading>
            </Center>
            <Box display="flex" justifyContent="space-evenly" id="projects">
                <Box boxSize={80} className="project-box" px={1}>
                    <Center my={4}>
                        <h2>Real Estate Agent</h2>
                    </Center>
                    <a href="https://gut1dg0.github.io/real-estate-project/" target={blank}><img src={realestate} alt="Real Estate Agent"/></a>
                    <Text my={2} fontStyle="italic">A website designed to promote the services of a 
                        Real Estate Agent
                    </Text>
                </Box>
                <Box boxSize={80} className="project-box" px={1}>
                    <Center my={4}>
                        <h2>Hair Day Boutique</h2>
                    </Center>
                    <a href="https://gut1dg0.github.io/hair-day/" target={blank}><img src={hairday} alt="Hair Day Boutique"/></a>
                    <Text my={2} fontStyle="italic">A website designed to promote the services of a 
                        Boutique
                    </Text>
                </Box>
                <Box boxSize={80} className="project-box" px={1}>
                    <Center my={4}>
                        <h2>Recopilador de informes</h2>
                    </Center>
                    <a href="https://gut1dg0.github.io/Recopilador-de-informes/" target={blank}><img src={recopilador} alt="Recopilador de informes"/></a>
                    <Text my={2} fontStyle="italic">
                        A website designed to display information for visitors
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;