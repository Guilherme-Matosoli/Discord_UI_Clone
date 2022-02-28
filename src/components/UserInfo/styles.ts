import styled from 'styled-components';

import { Mic, Headset, Settings} from 'styled-icons/material'

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 10px;

    background-color: var(--quaternary);
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
`;

export const Avatar = styled.div`
    width: 32px;
    height: 32px;

    border-radius: 50%;
    background-color: var(--gray);
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 9px;

    >strong{
        display: block;

        color: var(--white);
        font-size: 13px;
        font-weight: bold;

        cursor: pointer;
    }

    >span{
        font-size: 13px;
        color: var(--white);
        opacity: 0.70;

        cursor: pointer;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const MicIcon = styled(Mic)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: 0.7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`;

export const HeadphoneIcon = styled(Headset)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: 0.7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: 0.7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`;

