"use client"

//import Image from "next/image";
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../chakra/theme';
import   Layout  from '../components/Layout/Layout';
import { RecoilRoot } from 'recoil';

export default function Home() {
  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
        <div> Hello World!</div>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
};
