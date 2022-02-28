import styled from "styled-components";

import { Hashtag } from 'styled-icons/heroicons-outline'

export const Container = styled.div`
    grid-area: CI;
    
    background-color: var(--primary);

    display: flex;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;

    padding: 0 17px;
`;

export const HashtagIcon = styled(Hashtag)`
    width: 24px;
    height: 24px;

    top: 7px;
    left: 328px;

    color: var(--white);
    opacity: 0.3;

    /* margin-left: 17px;
    margin-right: 9px; */
`;

export const Title = styled.h1`
    color: var(--white);
    font-size: 16px;
    font-weight: bold;

    margin-left: 9px;
`;

export const Separator = styled.div`
    height: 24px;

    border-right: 1px solid var(--white);
    opacity: 0.3;

    margin: 0 13px;
`;

export const Description = styled.span`
    color: #FFFFF8;
    font-weight: normal;
    font-size: 15px;
    opacity: 0.7;
    `