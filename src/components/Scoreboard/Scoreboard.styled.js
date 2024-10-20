import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ScoreboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 20px;
  background: #83a4d4;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 400px;
  margin: 40px auto;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

export const ScoreItem = styled.div`
  margin: 15px 0;
  padding: 15px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  color: #333;
  font-size: 18px;
  text-align: center;
  width: 80%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
  }
`;
