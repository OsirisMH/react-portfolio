import React from 'react';

import { ContainerWrapper } from '../UI/ContainerWrapper';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

export const Layout = () => {
    return (
        <ContainerWrapper>
            <Header />
            <Main />
            <Footer />
        </ContainerWrapper>
    )
}
