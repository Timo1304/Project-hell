import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthButtons from './AuthButtons';
import AuthModal from '@/components/Modal/Auth/AuthModal';

type RightcontentProps = {
    //user: any;
};

const Rightcontent:React.FC<RightcontentProps> = () => {
    return (
        <>
                <AuthModal />
            <Flex justify='center' align='center'>
                <AuthButtons/>
            </Flex>
        </>
    )
}
export default Rightcontent;