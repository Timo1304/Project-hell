import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButtons from "./AuthButtons";
import AuthModal from "@/components/Modal/Auth/AuthModal";


type RightContentProps = {
  user?: any; // Adjust this type according to your user object structure
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center" height="100%">
        {/* Conditionally render based on user's authentication status */}
        {user ? (
          <Flex align="center">
            {/* Placeholder for when the user is authenticated (e.g., profile menu) */}
            <div>User Profile</div>
          </Flex>
        ) : (
          <Flex align="center">
            <AuthButtons /> 
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default RightContent;
