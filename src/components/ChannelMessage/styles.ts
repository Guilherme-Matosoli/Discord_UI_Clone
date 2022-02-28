import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: calc(100% - 4px);
    height: 48px;

    padding: 4px 16px;

    background-color: transparent;

    &.mention{
        background-color: var(--mention-message);

        border-left: 2px solid var(--mention-detail);

        padding-left: 14px;
    }

    & + div{
        margin-top: 13px;
    }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 17px;

    min-height: 40px;
`;

export const Avatar = styled.div`
    width: 40px;
    height: 40px;

    background-color: var(--secondary);
    border-radius: 50%;

    &.bot{
        background-color: var(--mention-detail);
    }
`;


export const Header = styled.div`
    display: flex;
    align-items: center;

    >strong{
        color: var(--white);
        font-size: 16px;
    }

    >span{
        margin-left: 6px;
        background-color: var(--discord);
        border-radius: 4px;
        padding: 4px 5px;

        font-size: 9px;
        font-weight: 700;
        text-transform: uppercase;

        color: var(--white);
    }

    >time{
        margin-left: 6px;

        color: var(--white);
        opacity: 0.42;
        font-size: 13px;
    }
`;

export const Content = styled.div`
    color: var(--white);
    font-size: 16px;

    text-align: left;
`;

export const Mention = styled.span`
    color: var(--link);
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`;
