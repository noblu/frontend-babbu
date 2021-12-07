import React from 'react'
import { Title, Wrapper, Text, Content,Icon } from './JoinOurStyle'

import DiscordIcon from '../../image/discord_icon.9df18366.png'
import Iconmail from '../../image/iconmail.png'
import NFT_Home from '../../image/NFT_Home.png'
import Telegram from '../../image/telegram_icon.png'
import Twitter from '../../image/twitter_icon.2e08fcc0.png'

function JoinOur() {
    return (
        <Wrapper>
            <Title>Join Our Community</Title>
            <Text>Join our vibrant community of game players and NFT enthusiasts and study all the latest tips and tricks.</Text>
            <Content>
                <Icon src={DiscordIcon}/>
                <Icon src={Iconmail} />
                <Icon src={NFT_Home} />
                <Icon src={Telegram} />
                <Icon src={Twitter} />
            </Content>
        </Wrapper>
    )
}
export default JoinOur