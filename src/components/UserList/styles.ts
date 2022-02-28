import styled from 'styled-components';

import { UserProps } from '.'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    grid-area: UL;
    background-color: var(--secondary);

    padding: 3px 6px 0 16px;

    max-height: calc(100vh - 46px);
    overflow-y: scroll;

    ::-webkit-scrollbar{
        width: 4px;
    }

    ::-webkit-scrollbar-thumb{
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track{
        background-color: var(--secondary);
    }
`;

export const Role = styled.span`
    margin-top: 20px;

    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    color: var(--gray);
`;

export const User = styled.div`
    display: flex;
    align-items: center;

    border-radius: 4px;
    background: transparent;

    transition: background .2s;

    cursor: pointer;

    margin-top: 5px;
    padding: 5px;

    &:hover{
        background: rgb(255, 255, 255, 0.1);  
    }

    >strong{
        margin-left: 13px;
        
        font-weight: 500;
        color: var(--white);
        opacity: 0.7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    >span{
        margin-left: 9px;
        background-color: var(--discord);
        border-radius: 4px;
        padding: 4px 5px;

        font-size: 9px;
        font-weight: 700;
        text-transform: uppercase;

        color: var(--white);
    }
`;

export const Avatar = styled.div`
    flex-shrink: 0;

    width: 32px;
    height: 32px;

    background-color: var(--primary);
    border-radius: 50%;

    &.bot{
        background-color: var(--mention-detail);
    }
`;
