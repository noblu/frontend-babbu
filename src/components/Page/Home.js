import styled from 'styled-components'
import React from 'react'
import Banner from '../Banner/Banner'
import BannerCenter from '../BannerCenter/BannerCenter'
//import { Main } from '../Mains/Main'
import Top from '../Top/Top'
import Main from '../Mains/Main';
import BannerBottom from '../BannerBottom/BannerBottom'
import JoinOur from '../JoinOur/JoinOur';

const Wrapper = styled.div`
min-height: 100vh;
width :100%;
display: flex;
align-items: center;
flex-direction: column;
`;


export const Home = () => {
    return (
        <Wrapper>
         <Top/>
         <Banner/>
         <Main/>
         <BannerCenter/>
        <BannerBottom />
        <JoinOur />
                </Wrapper>
    )
}


   