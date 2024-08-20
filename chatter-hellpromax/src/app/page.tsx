"use client"

//import Image from "next/image";
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../chakra/theme';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <div> Hello World!</div>
    </ChakraProvider>
  );
};
