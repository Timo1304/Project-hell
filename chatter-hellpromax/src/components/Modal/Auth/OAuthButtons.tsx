import { Button, Flex, Image} from '@chakra-ui/react';
import React from 'react';


const OAuthButtons:React.FC = () => {
    
    return (
        <Flex direction='column' width='100%' mb={7}>
            <Button variant='oauth' mb={2}>
                <Image src='/images/google-color-icon.png' height='20px' mr={4}/>
                Continue with Google
            </Button>
            <Button variant='oauth' >
                <Image src='images\facebook-round-color-icon.png' height='20px' mr={4}/>
                Continue with Facebook
            </Button>
        </Flex>
    )
}
export default OAuthButtons;