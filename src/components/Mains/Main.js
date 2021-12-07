import React from 'react'
import {  Wrapper, Content, Container, H2, H3, Text, Button, Img, Span, ImgRight } from './MainStyle'
import Babbu from '../../image/BabbuFamily.png';
import Bounty from '../../image/Bounty.png'
const Main = () => {
  
      return (
        <Wrapper>
            
          <H2>BABBU Gaming</H2>
          <Span>Play games, WIN REAL CASH!</Span>
        <Content>
            <Container>
                <Img src={Babbu}/>
                <H3>Babbu Family</H3>
                <Text>Provide gaming developers a series of gaming pre-launch supports, such as selling unique
                    in-game assets in the form of NFT, Farms, NFT auction and trading marketplace, ect...
                </Text>
                <Button>VISIT HOME</Button>
            </Container>
            <Container>
                 <ImgRight src={Bounty} />
                <H3>Bounty</H3>
                <Text>Receive BABBU Bounty task grow the BABBU family, and earn more $BABU!</Text>
                <Button>GET LINK</Button>
            </Container>
        </Content>         
        </Wrapper>     
    )
}
export default Main