import styled from 'styled-components';

import { useContext } from 'react';
import { StatusContext } from '../../contexts';

import UpdateState from './UpdateState';


export default function Button({ text, states, disabled }) {
    const { status, setStatus } = useContext(StatusContext);

    function callUpdateStates () {
        if (text !== 'Dormir') {
            UpdateState({ states, status, setStatus });
        }
    }

    return (
        <Wrapper disabled={disabled} onClick={callUpdateStates}>
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: 130px;
    border-radius: 15px;
    padding: 5px 0;
    bottom: 0;
    background-color: #744a2d;
    border: 1px solid rgb(42 23 0);
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 50%);
    text-align: center;
    font-size: 18px;
    color: ghostwhite;

    ${props => props.disabled
        ? `
            filter: brightness(0.5);
        `
        :`
            &:hover {
                filter: brightness(0.8);
                cursor: pointer;
            }

            &:active {
                filter: brightness(0.8);
                transform: translateY(1px);
            }
        `
    }
`;