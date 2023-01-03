import gutitech from '../assets/gutitech.jpg'
import ReactPlayer from 'react-player/youtube';
import { Heading, Image, VStack, Box, Center } from '@chakra-ui/react';

function Channel() {
    let gutichannel = 'https://www.youtube.com/@gutitech4913';
    return (
        <Box bgColor="blue.100" id='channel-section' py={10}>
            <Center py={4} my={10}>
                <Heading as="h2" fontSize="2xl">Discover a little more about me...</Heading>
            </Center>
            <VStack spacing={6}>
                <a href={gutichannel} target='_blank' rel='noreferrer'><Image borderRadius="full" boxSize="40" src={gutitech} alt="gutitech YouTube channel's logo" size="xl"/></a>
                <ReactPlayer url='https://youtu.be/QSS4kZGpfHU' controls={true}/>
            </VStack>
        </Box>
    );
}

export default Channel;