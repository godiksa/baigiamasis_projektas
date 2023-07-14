import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 17px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  gap: 10px;

  div {
    width: 70%;
    padding-left: 10px;
  }
`;

export const StyledErrorMessage = styled.p`
  margin-top: 10px;
  text-align: center;
`;

export const StyledFooterContainer = styled.div`
  width: 100%;
  text-align: center;
`;
