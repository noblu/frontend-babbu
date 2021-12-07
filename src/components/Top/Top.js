import React from 'react'
import { AppWrapper, Button, Content, IconLeft,IconRight, LogoImg, Wrapper } from './TopStyle';
import IconOpen from '../../image/Group.png';
import Logo from '../../image/Logo.png';
import LogoRight from '../../image/iconRight.png'

function Top() {
    return (
        <AppWrapper><Wrapper>
            <Content>
               <IconLeft src={IconOpen}  alt='icon-open' />
               <LogoImg src={Logo} alt='logo' />
            </Content>
            <Content>
               <Button>Connect Wallet</Button>
               <IconRight src={LogoRight} alt='' />
            </Content>
        </Wrapper></AppWrapper>
       
    )
}

export default Top
