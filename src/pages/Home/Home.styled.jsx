import styled from 'styled-components';

export const CardSet = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 500px;
  width: calc((100% - 40px) / 3);
  padding: 10px;
  border: 1px solid red;
  border-radius: 12px;
  overflow: hidden;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const PizzaImage = styled.img`
  width: 250px;
  height: 250px;
`;

export const ToppingImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const OrderBtnWrap = styled.div`
  display: flex;
  gap: 15px;
`;
