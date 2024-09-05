import { Flex, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";
import RightContent from "../Navbar/RightContent/Rightcontent";

const Navbar: React.FC = () => {
  // Use color mode values to adjust styles based on light or dark mode
  const bg = useColorModeValue("background.light", "background.dark");
  const logoColor = useColorModeValue("black", "white");

  return (
    <Flex bg={bg} height="60px" padding="6px 12px" align="center">
      <Flex align="center" mr={5}>
        <Image src="/images/react-svgrepo-com.svg" height="40px" filter={logoColor === "white" ? "invert(1)" : "none"} />
        <Image
          src="/images/chatter-svg.svg"
          height="46px"
          display={{ base: "none", md: "unset" }}
          ml={2}
          filter={logoColor === "white" ? "invert(1)" : "none"}
        />
      </Flex>
      <SearchInput />
      <RightContent />
      {/* <Directory /> */}
    </Flex>
  );
};

export default Navbar;
