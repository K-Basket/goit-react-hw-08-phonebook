import styled from 'styled-components';

export const ListSt = styled.ul`
  display: grid;
  gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ItemSt = styled.li`
  margin: 0 auto;
  width: 600px;
`;

export const WrapSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  & p {
    margin: 0;
    margin: 0;
  }

  & :first-child {
    font-weight: 700;
  }
`;

export const ButtonsSt = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
