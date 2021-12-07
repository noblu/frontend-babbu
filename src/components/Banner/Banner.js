import React from 'react'
import {Content, Wrapper, Img, Span } from './BannerStyle'
import BannerLogo from '../../image/banner.png';
function Banner() {
    return (
        <Wrapper>
            <Img src={BannerLogo} alt=''/>
            <Content>
                <Span />
                <Span/>
                <Span/>
                <Span/>
            </Content>
        </Wrapper>
    )
}

export default Banner
