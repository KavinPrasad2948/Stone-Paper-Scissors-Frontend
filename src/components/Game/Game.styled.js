import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 20px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  animation: ${bounce} 2s infinite;
  width: 500px;
  margin: 50px auto;
  transform: skew(-5deg);
`;

export const PlayerInput = styled.input`
  margin: 20px;
  padding: 15px;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  text-align: center;
  background: #fff;
  width: 80%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;

  &:focus {
    outline: none;
    transform: scale(1.05);
  }
`;

export const ChoiceButton = styled.button`
  margin: 20px;
  padding: 15px 30px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  transition: all 0.4s;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  animation: ${bounce} 1s ease-in-out infinite alternate;

  &:hover {
    background: linear-gradient(135deg, #ff0844 0%, #ffb199 100%);
    transform: translateY(-5px) scale(1.1);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const ResultMessage = styled.h4`
  color: #fff;
  font-size: 24px;
  margin-top: 30px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 15px;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SubmitButton = styled.button`
  padding: 15px 40px;
  font-size: 20px;
  border-radius: 20px;
  border: none;
 background: linear-gradient(135deg, #FFD700 0%, #FFF8DC 100%);
  color: grey;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  outline: none;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%); 
    transform: translateY(-5px);
    animation: ${pulse} 1.5s infinite;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 10%, transparent 10.01%);
    transition: all 0.4s;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }

  &:hover:before {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }
`;
