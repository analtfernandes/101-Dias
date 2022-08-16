import styled from "styled-components";

export default function DayEvents () {
    return (
        <Container>
        </Container>
    );
}

const Container = styled.div`
    width: 65%;
    height: 394px;
    margin: 140px auto 0 10px;
    padding: 20px 10px;
    border-radius: 10px;
    overflow-y: scroll;
    background-color: rgba(80, 63, 42, 0.9);
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

const Message = styled.div`
    width: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    margin-bottom: 5px;
    background-color: rgba(0,0,0,0.7);
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
`;