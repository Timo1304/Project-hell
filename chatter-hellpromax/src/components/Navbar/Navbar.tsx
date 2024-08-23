import { Flex, Image } from "@chakra-ui/react";
import React from 'react';
import SearchInput from "./SearchInput";
import RightContent from './RightContent/Rightcontent';

 
const Navbar:React.FC = () => {
    
    return (
    <Flex bg="gray.50" height="44px" padding="6px 12px" >
        <Flex align="center">
            <Image src="/images/react-svgrepo-com.svg" height="30px"/>
            <Image src="/images/chatter-svg.svg" height="46px" display={{base:"none", md:"unset"}}/>
        </Flex>
        <SearchInput />
        <RightContent/>
       {/* <Directory /> */}
    </Flex>
    );
};
export default Navbar;