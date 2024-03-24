import styled from 'styled-components';

export const CardSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: calc((100% - 40px) / 3);

  border: 1px solid red;
  border-radius: 12px;
  overflow: hidden;
`;

export const InfoWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const PizzaImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const TextThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const ToppingImage = styled.img`
  width: 50px;
  height: 50px;
`;
