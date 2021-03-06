import styled from "styled-components";

import { Hashtag } from 'styled-icons/heroicons-outline'
import {PersonAdd, Settings} from 'styled-icons/material'

import { Props } from '.'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    cursor: pointer;

    >div{
        display: flex;
        align-items: center;
    }

    >div span{
        font-size: 15px;
        color: var(--senary);

        margin-left: 5px;

    }

    &:hover,
     &.active{
        background-color: var(--quinary);

        >div span{
            color: var(--white);
        }
    }
    `;

export const HashtagIcon = styled(Hashtag)`
    

    width: 20px;
    height: 20px;

    color: var(--symbol);

    cursor: pointer;
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;

    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;

    color: var(--symbol);

    cursor: pointer;

    transition: color .2s;

    margin-left: 4px;

    &:hover{
        color: var(--white);
    }
`;
