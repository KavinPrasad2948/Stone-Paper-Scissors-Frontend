import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 20px;
  background: #f6d365;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  width: 400px;
  margin: 30px auto;
  animation: ${slideIn} 1s ease-in-out;
`;

export const HistoryItem = styled.div`
  margin: 10px 0;
  padding: 15px;
  border-radius: 10px;
  background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
  font-size: 16px;
  text-align: center;
  width: 90%;
  transition: background-color 0.3s ease, transform 0.2s;

  &:hover {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateY(-5px);
  }
`;
