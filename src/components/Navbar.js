import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

function Navbar( { children }) {
    const socials = [
        {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/agustin-compean-40059b224"
        },
        {
        icon: faGithub,
        url: "https://github.com/Gut1dg0"
        }
    ]

    return (
        <Box id="nav-bar">
            <nav id="nav-bar">
                <HStack
                px={16}
                py={4}
                justifyContent="space-between"
                id="chai"
                >
                    <HStack color="blue.400" id="nav-icons">
                        {<a href={socials[0].url} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={socials[0].icon} size="2x"/></a>}
                        {<a href={socials[1].url} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={socials[1].icon} size="2x"/></a>}
                    </HStack>
                    <ul> 
                        <HStack color="white" id="nav-list">
                            <a href="/" className="nav-item">Home</a>
                            <a href="#projects-section" className="nav-item">Projects</a>
                            <a href="#channel-section" className="nav-item">Channel</a>
                        </HStack>
                    </ul>
                </HStack>
            </nav>
        </Box>
    );
};

export default Navbar