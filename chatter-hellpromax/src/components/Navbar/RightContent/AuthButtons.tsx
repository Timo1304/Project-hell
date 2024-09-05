// src/components/AuthButtons.tsx

import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import ColorModeSwitcher from './colorModeSwitcher'; 

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <Flex align="center">
      <Button
        variant="outline"
        height="28px"
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: 'login' })}
      >
        Log In
      </Button>
      <Button
        height="28px"
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => setAuthModalState({ open: true, view: 'signup' })}
      >
        Sign Up
      </Button>
      <ColorModeSwitcher /> {/* Now imported from its own file */}
    </Flex>
  );
};

export default AuthButtons;
