import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement, useColorModeValue } from "@chakra-ui/react";
import React from 'react';

type SearchInputProps = {
  user?: any; 
};

const SearchInput: React.FC<SearchInputProps> = () => {
  // Dynamic color values based on light or dark mode
  const bg = useColorModeValue("gray.50", "gray.800");
  const placeholderColor = useColorModeValue("orange.500", "orange.200");
  const borderColor = useColorModeValue("orange.200", "orange.300");
  const focusBorderColor = useColorModeValue("#5F370E", "#ffcb77");

  return (
    <Flex flexGrow={1} margin={2} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color={placeholderColor} />} 
        />
        <Input
          placeholder="Search Chatter"
          fontSize="10pt"
          _placeholder={{ color: placeholderColor }} 
          _hover={{
            bg: "white",
            borderColor: borderColor, 
          }}
          _focus={{
            outline: "none",
            border: "2px solid",
            borderColor: focusBorderColor,
            bg: "white",
          }}
          bg={bg}
          height="34px"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
