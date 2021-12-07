import React from 'react'
import {Content, Wrapper, Img, Span, Text, Title, Button, Icons , Icon, ButtonBottom } from './BannerCenterStyle'
import Mark from '../../image/MaskGroup.png';
import Facebook from '../../image/facebook.png';
import Discord from '../../image/Discord.png';
import Twitte from '../../image/twitte.png';
import Dribbble from '../../image/Dribbble.png';
import Group from '../../image/group.png';
function BannerCenter() {
    return (
        <Wrapper>
            <Content>
            <Text>
                <Title>Games for you</Title>
                <Span>Every games has 4 mission daily</Span>
            </Text>
                <Button>View all</Button>
            </Content>
            <Img src={Mark} alt='' />
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

export default BannerCenter
