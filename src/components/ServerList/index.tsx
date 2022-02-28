import React from "react";

import ServerButton from '../ServetButton'

import { Container, Separator } from './styles'

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome/>

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications mentions={23}/>
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={2}/>
            <ServerButton />
            <ServerButton hasNotifications/>

        </Container>
    )
}

export default ServerList;