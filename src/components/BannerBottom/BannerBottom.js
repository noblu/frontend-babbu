import React from 'react'
import {Content, Wrapper, Img, Span, TextContent , Text, Container, ImgPeople, TextTop , Icons , Icon, ButtonBottom } from './BannerBottomStyle'
import Jackpot from '../../image/jackpot.png';
import Facebook from '../../image/facebook.png';
import Discord from '../../image/Discord.png';
import Twitte from '../../image/twitte.png';
import Dribbble from '../../image/Dribbble.png';
import Group from '../../image/group.png';
import Union from '../../image/Union.png';
import Picture from '../../image/picture.png'
function BannerBottom() {
    return (
        <Wrapper>
            
            <Img src={Jackpot} alt='' />
            <Container>
            <Text>
              <ImgPeople src={Union}/>
            <Span>JACKPOT MILLIONS</Span>      
            </Text>
            <Text>
                    <ImgPeople src={Picture } />
               <TextTop>$ 10,000</TextTop>     
            </Text>
            <TextContent>
                    Draws in 01h 14m 20s
            </TextContent>
            </Container>
                      
            <Content>
                <ButtonBottom>Play now!</ButtonBottom>
                <Icons>
                    <Icon src={Facebook} alt='' />
                    <Icon src={Discord} alt='' />
                    <Icon src={Twitte} alt='' />
                    <Icon src={Dribbble} alt='' />
                    <Icon src={Group} alt='' />
                </Icons>
            </Content>
        </Wrapper>
    )
}

export default BannerBottom
