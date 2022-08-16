import styled from 'styled-components';

const buttons = ['Escrever', 'Alimentar-se', 'Exercitar-se'];

export default function Footer() {

    return (

        <Wrapper>
            {buttons.map((button, index) => (
                <Button key={index} className='footer-button'>{button}</Button>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    padding: 20px 0;
    background-color: rgb(72 52 27);
    border: 3px solid rgb(36 22 5);
    border-bottom: none;
    border-radius: 15px 15px 0 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
`;

const Button = styled.div`
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

    &:hover {
        filter: brightness(0.8);
        cursor: pointer;
    }

    &:active {
        filter: brightness(0.8);
        transform: translateY(1px);
    }
`;