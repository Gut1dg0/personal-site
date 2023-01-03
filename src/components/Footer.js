import { Box, HStack, Text } from "@chakra-ui/react"
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    const email = "agustin.compeanc@gmail.com"
    const phoneNumber = "+521 671-108-0539"
    
    return (
        <Box bgColor="black" color="white" py={8} px={4} fontStyle="oblique">
            <HStack marginBlockEnd={3}>
                <FontAwesomeIcon icon={faPhone}/>
                <Text>Phone: {phoneNumber}</Text>
            </HStack>
            <HStack>
                <FontAwesomeIcon icon={faMailBulk}/>
                <Text>Email: {email}</Text>
            </HStack>
        </Box>
    )
}