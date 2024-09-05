"use client";

import * as React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import { theme } from '../chakra/theme';
import Layout from '../components/Layout/Layout';

export default function Home() {
    return (
        <RecoilRoot>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Layout>
                    <div>Hello World!</div>
                    
                </Layout>
            </ChakraProvider>
        </RecoilRoot>
    );
}
