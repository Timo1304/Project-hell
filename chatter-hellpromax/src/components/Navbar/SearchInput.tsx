import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import React from 'react';

type SearchInputProps = {
    //user:
};

const SearchInput:React.FC<SearchInputProps> = () => {
    
    return (
        <Flex flexGrow={1} margin={2} align='center' >
            <InputGroup>
                <InputLeftElement 
                pointerEvents='none'
                children={<SearchIcon color='orange.100' marginBottom={1} />}
                />
                <Input  placeholder='Search Chatter' 
                fontSize='10pt' 
                _placeholder={{ color:"orange.100"}} 
                _hover={{ 
                   
                }}
                _focus={{
                    outline: 'none',
                    border: '2px solid',
                    borderColor: '#5F370E',
                }}
                bg='gray.50'
                height='34px' 
                 />
            </InputGroup>
        </Flex>
    )
}
export default SearchInput;