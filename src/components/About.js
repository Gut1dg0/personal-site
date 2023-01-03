import { Text, Avatar, Box, Heading, VStack, Button } from '@chakra-ui/react'
import agus from '../assets/Agustin.jpg'

function About() {
    const handleClick = () => {
        let text = document.getElementById('hidden-text');
        let btn = document.getElementById('my-btn');

        if(text.style.display === 'none') {
            text.style.display = 'inline'
        }else
            text.style.display = 'none'
    }
    return (
        <Box id='about-section'>
            <VStack
            spacing={6}
            id="person"
            alignItems="center"
            justifyContent="center"
            >
                <Avatar boxShadow="dark-lg" name="Agustin Compean" size="2xl" src={agus}></Avatar>
                <Heading as="h1">Agustin Compean</Heading>
                <Heading as="h2" size="lg">Front-End Developer</Heading>
            </VStack>
            <Box className="description" px={3}>
                <Heading as="h2" size="lg">Who am I?</Heading>
                <Text fontSize="2xl">
                    I'm a Front-End Developer specialised
                    in React. <span id="hidden-text">I give my best on every project
                    since this profession combines two of the
                    things that I am most passionate about, Design 
                    and Software.</span>
                </Text>
                <Button id='my-btn' onClick={handleClick}>...</Button>
            </Box>
        </Box>
    )
}

export default About