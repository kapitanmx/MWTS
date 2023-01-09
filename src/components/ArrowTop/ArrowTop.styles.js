import styled, {keyframes} from 'styled-components';

const movebtn = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(30px);
  }
  100%{
    transform: translateY(0px);
  }

`;

export const Wrapper = styled.div`
    position: relative;
    background: #fff;
    border-radius: 25px;
    height: 50px;
    width: 50px;
`;

export const Arrow = styled.img`
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;
    height: 50px;
    width: 50px;
    cursor: pointer;
    &:hover{
        animation: ${movebtn} 3s ease-in-out infinite;
        animation-fill-mode: forwards;
    }
`;