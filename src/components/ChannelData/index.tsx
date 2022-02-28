import React, { useRef, useEffect } from 'react'

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
            <Messages>
                <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Boa noiteeee'
                />

            <ChannelMessage 
                author='Matosolinho'
                date='08/02/2022'
                isBot
                hasMention
                content={<>
                
                    <Mention>@Gui Matosoli </Mention> me dá admin, cara

                </>}
                />

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Nada disso'
                />

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Seguidor'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content='Teste'
                />  

            <ChannelMessage 
                author='Seguidor'
                date='08/02/2022'
                content='Teste'
                isBot
                />  

            <ChannelMessage 
                author='Gui Matosoli'
                date='08/02/2022'
                content={
                    <>
                    <Mention>@Seguidor</Mention> testado
                    </>
                }
                />  
                 
            </Messages>

            <InputWrapper>
                <Input placeholder='Conversar em #chat-livre'/>

                <InputIcon />
            </InputWrapper>
        </Container>
    )
}

export default ChannelData;